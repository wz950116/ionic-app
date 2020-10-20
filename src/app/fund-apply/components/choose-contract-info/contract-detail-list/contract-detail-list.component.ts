import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-contract-detail-list',
  templateUrl: './contract-detail-list.component.html',
  styleUrls: ['./contract-detail-list.component.scss'],
})
export class ContractDetailListComponent implements OnInit {
  public formData: any = {
    contractNo: '',
    tradeType: '',
    contractType: '',
    headlineNames: '',
    supplierNames: '',
    signDate: '',
    contractLifeStart: '',
    contractLifeEnd: '',
    deliveryMarketName: '',
    currency: '',
    originalAmount: '',
    excAmt: '',
    productName: '',
    brand: '',
    origin: '',
    spec: '',
    productKeyAttr01: '',
    productKeyAttr02: '',
    productQuantity: '',
    productUnitCode: '',
    measurementQuantity: '',
    measurementUnitCode: '',
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
