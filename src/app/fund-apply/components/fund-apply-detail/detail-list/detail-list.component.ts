import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss'],
})
export class DetailListComponent implements OnInit {
  public formData: any = {
    billType: '',
    contractNo: '',
    lotNo: '',
    tradeType: '',
    headlineNames: '',
    customerNames: '',
    signDate: '',
    lotLifeStart: '',
    lotLifeEnd: '',
    productName: '',
    brand: '',
    origin: '',
    spec: '',
    productKeyAttr01: '',
    productKeyAttr02: '',
    pricingType: '',
    estimatedPrice: '',
    productQuantity: '',
    productUnitCode: '',
    measurementQuantity: '',
    measurementUnitCode: '',
    currency: '',
    goodsAmount: '',
    applyAmount: '',
    hasPaymentAmount: '',
    noneApplyAmount: '',
    bizEmployeeName: '',
    optEmployeeName: '',
    docMakeDt: '',
  }
  constructor(public navParams: NavParams) {
    this.formData = this.navParams.data
  }
  public data: any = {}
  ngOnInit() {}
  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss()
  }
}
