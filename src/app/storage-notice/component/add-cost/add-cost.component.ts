import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { AppConfig } from '../../../app.config';

@Component({
  selector: "app-add-cost",
  templateUrl: "./add-cost.component.html",
  styleUrls: ["./add-cost.component.scss"]
})
export class AddCostComponent implements OnInit {
  public settlementList: [] = [];
  public feeDirection: [] = [];
  public feeList: [] = [];
  public formData: any = {
    settlementCode: "",
    settlementName: "",
    feeDirection: "",
    feeCode: "",
    feeName: "",
    includeTaxPrice: null,
    taxRate: null,
    quantity: 0,
    includeTaxAmount: 0,
    costFlag: true,
    intercourseFlag: true
  };

  constructor(
    public alertController: AlertController,
    public navController: NavController,
    public common: CommonService,
    public toastController: ToastController,
    public route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.queryParams.subscribe(() => {
      const {
        inQuantity,
        productName,
        productCode,
        brand,
        origin,
        spec,
        productDetailNo,
        currency,
        productKeyAttr01,
        productKeyAttr02,
        productKeyAttr03
      } = AppConfig.inNotice.currentProductInfo;
      this.formData = Object.assign(this.formData, {
        quantity: inQuantity,
        productName,
        productCode,
        brand,
        origin,
        spec,
        lotProductDetailCode: productDetailNo,
        preBillProductDetailCode: productDetailNo,
        currencyCode: currency,
        productKeyAttr01,
        productKeyAttr02,
        productKeyAttr03
      })
    })
    // 结算单位
    const settlementList: any = await this.selectDataRequest({
      queryParams: { usingFlag: "1", auditStatus: "3" },
      type: "CUST_INFO"
    });
    this.settlementList = settlementList.data;
    // 费用方向
    this.feeDirection = AppConfig.dataDict.feeDirection;
    // 费用名称
    const feeList: any = await this.selectDataRequest({
      queryParams: { usingFlag: "1" },
      type: "DD_FEE_TYPE"
    });
    this.feeList = feeList.data;
  }

  async onConfirm() {
    const { 
      settlementCode,
      feeDirection,
      feeCode,
      includeTaxPrice,
      taxRate
    } = this.formData;
    if (
      !settlementCode ||
      !feeDirection ||
      !feeCode ||
      !includeTaxPrice ||
      !taxRate
    ) {
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
      message: "是否确定添加？",
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {}
        },
        {
          text: "确认",
          handler: () => {
            this.formData.includeTaxAmount = this.formData.includeTaxPrice * this.formData.quantity
            let settlement: any = this.settlementList.filter((item: any) => item.code === this.formData.settlementCode)[0]
            this.formData.settlementName = settlement.name
            let fee: any = this.feeList.filter((item: any) => item.code === this.formData.feeCode)[0]
            this.formData.feeName = fee.name
            this.formData.costFlag = this.formData.costFlag ? '1' : '0'
            this.formData.intercourseFlag = this.formData.intercourseFlag ? '1' : '0'
            AppConfig.inNotice.inBillCostList.push(this.formData)
            this.navController.navigateForward(["storage-notice"]);
          }
        }
      ]
    });

    await alert.present();
  }

  selectDataRequest(params: any) {
    return this.common.post("/dd/selectData/list", {
      funcModule: "入库通知新增",
      funcOperation: "查询",
      data: params
    });
  }
}
