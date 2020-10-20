import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-price-batch-detail',
  templateUrl: './price-batch-detail.component.html',
  styleUrls: ['./price-batch-detail.component.scss'],
})
export class PriceBatchDetailComponent implements OnInit {
  public formData: any = {
    pricingLotCode: '',
    contractCode: '',
    purchaseOrSale: '',
    currency: '',
    productName: '',
    pricingType: '',
    pricingItemName: '',
    pricingTimeStart: '',
    pricingTimeEnd: '',
    pricingQuantity: '',
    rmnMemQty: '',
    docMaker: '',
    valueUnit: '',
    premium: '',
    docMakeDate: '',
    note: '',
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
