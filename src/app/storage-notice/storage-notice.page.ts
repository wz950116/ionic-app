import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../app.config';
import { CommonService } from '../service/common.service';

@Component({
  selector: "app-storage-notice",
  templateUrl: "./storage-notice.page.html",
  styleUrls: ["./storage-notice.page.scss"]
})
export class StorageNoticePage implements OnInit {
  public showBillCostList: boolean = true;
  public currencyList: [] = [];
  public bizOrganList: [] = [];
  public bizDeptList: [] = [];
  public bizEmployeeList: [] = [];
  public formData: any = {
    supplierName: "",
    supplierCode: "",
    warehouseName: "",
    warehouseCode: "",
    currencyCode: "",
    inDate: "",
    bizOrganCode: "",
    bizDeptCode: "",
    bizEmployeeCode: "",
    remark: "",
    inProductList: [],
    inBillCostList: []
  };

  constructor(
    public navController: NavController,
    public route: ActivatedRoute,
    public common: CommonService,
    public toastController: ToastController,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  async ngOnInit() {
    // 机构
    const bizOrganList: any = await this.selectDataRequest({
      type: "FUNC_ORG"
    });
    this.bizOrganList = bizOrganList.data;
    // 部门
    const bizDeptList: any = await this.selectDataRequest({
      type: "FUNC_DEPT"
    });
    this.bizDeptList = bizDeptList.data;
    // 员工
    const bizEmployeeList: any = await this.selectDataRequest({
      type: "FUNC_EMPLOYEE"
    });
    this.bizEmployeeList = bizEmployeeList.data;
    
    this.route.queryParams.subscribe(data => {
      const { inProductList, inBillCostList } = AppConfig.inNotice
      this.currencyList = AppConfig.dataDict.currency;
      this.formData = Object.assign(this.formData, data, {
        inProductList,
        inBillCostList
      });
    });
  }

  selectDataRequest(params: any) {
    return this.common.post("/dd/selectData/list", {
      funcModule: "入库通知新增",
      funcOperation: "查询",
      data: params
    });
  }

  supplierSelect() {
    this.navController.navigateForward("/storage-notice/supplier-select");
  }

  storageSelect() {
    this.navController.navigateForward("/storage-notice/storage-select");
  }

  async onAddProduct() {
    const alert = await this.alertController.create({
      header: "入库类型",
      message: "",
      inputs: [
        {
          name: "pcrk",
          type: "radio",
          label: "批次入库",
          value: "1",
          checked: true
        }
      ],
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "确认",
          handler: val => {
            this.navController.navigateForward(`/storage-notice/purchase-batch-select?type=${val}`);
          }
        }
      ]
    });

    await alert.present();
  }

  dateFormate(date: any) {
    if (date) {
      const year = new Date(date).getFullYear() + "";
      const month =
        new Date(date).getMonth() + 1 > 9
          ? new Date(date).getMonth() + 1
          : "0" + (new Date(date).getMonth() + 1);
      const day =
        new Date(date).getDate() > 9
          ? new Date(date).getDate()
          : "0" + new Date(date).getDate();
      return year + month + day;
    }
  }

  onAddCost(item: any) {
    if (!item.inQuantity) item.inQuantity = 0;
    AppConfig.inNotice.currentProductInfo = item
    this.navController.navigateForward(`/storage-notice/add-cost`);
  }

  onDeleteProduct(item: any) {
    const index: string = AppConfig.inNotice.inProductList.indexOf(item)
    AppConfig.inNotice.inProductList.splice(index, 1)
  }

  onDeleteCost(item: any) {
    const index: string = AppConfig.inNotice.inBillCostList.indexOf(item)
    AppConfig.inNotice.inBillCostList.splice(index, 1)
  }

  doCancle() {
    this.navController.navigateForward("/");
  }

  async doSave() {
    if (!this.formData.supplierName || !this.formData.warehouseName || !this.formData.currencyCode || !this.formData.inDate || !this.formData.bizOrganCode || !this.formData.bizDeptCode || !this.formData.bizEmployeeCode) {
      const toast = await this.toastController.create({
        message: "必填项不得为空",
        position: "top",
        duration: 2000,
        showCloseButton: false,
        closeButtonText: "关闭",
        color: "danger"
      });
      toast.present();
      return
    }

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
            const formData: string = JSON.stringify(this.formData)
            const store: string = JSON.stringify(AppConfig.inNotice)
            const params: any = Object.assign({}, JSON.parse(formData), JSON.parse(store))
            delete params.currentProductInfo
            params.inDate = this.dateFormate(params.inDate)
            params.deliverCode = params.inProductList[0].lot.supplierCodeList[0]
            params.inType = 'LOT'
            params.lotNo = params.inProductList[0].lotNo
            params.contractNo = params.inProductList[0].contractNo
            params.inProductList.forEach((item: any) => {
              item.lotProductDetailCode = item.productDetailNo
              item.preBillProductDetailCode = item.productDetailNo
              item.rightFlag = !!+item.rightFlag ? '1' : '0'
              item.goodsFlag = !!+item.goodsFlag ? '1' : '0'
              if (item.goodsFlag === '1') item.settlementQuantity = item.inQuantity
            })

            const loading = await this.loadingController.create({
              message: "加载中..."
            });
            await loading.present();

            this.common.post("/warehouse/inBill/save", {
              funcModule: "入库通知新增",
              funcOperation: "保存",
              data: params
            }).then(async (res: any) => {
              this.loadingController.dismiss();
              if (res.status) {
                const toast = await this.toastController.create({
                  message: "保存成功",
                  position: "top",
                  duration: 2000,
                  showCloseButton: false,
                  closeButtonText: "关闭",
                  color: "success"
                });
                toast.present();
                this.navController.navigateForward('/storage-notice/save-success')
              } else {
                const toast = await this.toastController.create({
                  message: res.msgText,
                  position: "top",
                  duration: 2000,
                  showCloseButton: false,
                  closeButtonText: "关闭",
                  color: "danger"
                });
                toast.present();
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }
}
