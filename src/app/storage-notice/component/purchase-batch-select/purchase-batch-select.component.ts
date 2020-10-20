import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { AppConfig } from '../../../app.config';

@Component({
  selector: "app-purchase-batch-select",
  templateUrl: "./purchase-batch-select.component.html",
  styleUrls: ["./purchase-batch-select.component.scss"]
})
export class PurchaseBatchSelectComponent implements OnInit {
  public documentTypeList: any[] = ["全部"];
  public formData: any = {
    bizEmployeeCode: "",
    contractNo: "",
    deliveryMarketCode: "",
    hasRmnFlg: "",
    lotNo: "",
    productCode: "",
    qmQueryExtras: [],
    supplierCode: "",
    tradeType: "",
    tradeTypeList: []
  };
  public ladingNoFormData: any = {
    ladingBillNo: "",
    productCodeList: [],
    qmQueryExtras: [],
    supplierCode: ""
  };
  public productItemFormData: any = {
    productCode: ""
  };
  public list: [] = [];
  public type: string = "";

  constructor(
    public alertController: AlertController,
    public navController: NavController,
    public common: CommonService,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  async ngOnInit() {
    AppConfig.dataDict.tradeType.forEach((item: any) => {
      this.documentTypeList.push(item.label);
    });
    this.route.queryParams.subscribe(data => {
      this.type = data.type;
      this.getList();
    });
  }

  async getList() {
    this.list = []
    const loading = await this.loadingController.create({
      message: "加载中..."
    });
    await loading.present();

    if (this.type === "1") {
      // 批次入库
      return this.common
        .post("/contract/plProductDetail/listChooseStorage", {
          funcModule: "入库通知新增",
          funcOperation: "查询",
          isPage: true,
          size: 20,
          sortString: "docMakeDt.desc",
          data: this.formData
        })
        .then(async (response: any) => {
          this.list = response.data;
          this.list.forEach((item: any) => {
            item.inQuantity = item.productQuantity
          })
          this.loadingController.dismiss();
        })
        .catch(err => {
          console.log(err);
        });
    } else if (this.type === "2") {
      // 提单入库
      return this.common
        .post("/warehouse/whLadingBillProduct/page", {
          funcModule: "入库通知新增",
          funcOperation: "查询",
          isPage: true,
          size: 20,
          sortString: "ladingDate.desc,contractNo.desc,lotNo.desc,ladingBillNo.desc",
          data: this.ladingNoFormData
        })
        .then(async (response: any) => {
          this.list = response.data;
          this.list.forEach((item: any) => {
            item.inQuantity = item.restQuantity
            item.measurementQuantity = item.restMeasurementQuantity
          })
          this.loadingController.dismiss();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  async onConfirm() {
    const alert = await this.alertController.create({
      header: "",
      message: "请确认当前数据已经准确无误，是否确定保存？",
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "确认",
          handler: async () => {
            // 只允许选择相同批次/提单号数据
            const list = this.list.filter((item: any) => item.disabled)
            const listNo: Array<string> = []
            list.forEach((item: any) => {
              const contractNo: string = item.contractNo + "-" + item.lotNo
              if (!listNo.includes(contractNo)) listNo.push(contractNo)
            })
            if (listNo.length > 1) {
              const toast = await this.toastController.create({
                message: "只允许选择相同合同批次号",
                position: "top",
                duration: 2000,
                showCloseButton: false,
                closeButtonText: "关闭",
                color: "danger"
              });
              toast.present();
              return;
            }
            const storeId: string = AppConfig.inNotice.inProductList.map((item: any) => item.contractNo + "-" + item.lotNo)[0]
            if (storeId === listNo[0]) {
              AppConfig.inNotice.inProductList = AppConfig.inNotice.inProductList.concat(list)
            } else if (listNo[0]) {
              AppConfig.inNotice.inProductList = list
            }
            this.navController.navigateForward(["storage-notice"])
          }
        }
      ]
    });

    await alert.present();
  }

  selectClick(type: string) {
    const _type = AppConfig.dataDict.tradeType.filter(
      (item: any) => item.label === type
    )[0];
    if (_type) {
      this.formData.tradeType = _type.value;
    } else {
      this.formData.tradeType = "";
    }
    this.getList();
  }

  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, e);
    this.getList();
  }

  onJoin(item: any) {
    item.disabled = !item.disabled;
    this.onCancelEdit(item);
  }
  offJoin(item: any) {
    item.disabled = !item.disabled;
    this.onActiveEdit(item);
  }

  onCancelEdit(item: any) {
    item.inQuantityEdit = true;
    item.measurementQuantityEdit = true;
    item.includeTaxPriceEdit = true;
  }

  onActiveEdit(item: any) {
    item.inQuantityEdit = false;
    item.measurementQuantityEdit = false;
    item.includeTaxPriceEdit = false;
  }

  inQuantitySet(item: any) {
    item.inQuantityEdit = true
    item.inQuantity = item.inQuantity > item.productQuantity ? item.productQuantity : item.inQuantity
    item.inQuantity = item.inQuantity < 0 ? 0 : item.inQuantity
  }

  measurementQuantitySet(item: any) {
    item.measurementQuantityEdit = true
    item.measurementQuantity = item.measurementQuantity > item.rmnPrdQty ? item.rmnPrdQty : item.measurementQuantity
    item.measurementQuantity = item.measurementQuantity < 0 ? 0 : item.measurementQuantity
  }
}
