import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'

@Component({
  selector: 'app-claim-detail-list',
  templateUrl: './claim-detail-list.component.html',
  styleUrls: ['./claim-detail-list.component.scss'],
})
export class ClaimDetailListComponent implements OnInit {
  public formData: any = {
    claimNo: '',
    claimDate: '',
    customerName: '',
    claimType: '',
    receiveNo: '',
    receiveType: '',
    signDate: '',
    claimAmount: '',
    currency: '',
    usedAmount: '',
    useStatus: '',
    bizOrganName: '',
    bizDeptName: '',
    bizEmployeeName: '',
    optEmployeeName: '',
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
