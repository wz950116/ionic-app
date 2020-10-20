import { Component, OnInit } from '@angular/core'
import { NavParams } from '@ionic/angular'
import { CommonService } from '../../../service/common.service'
import { AlertController } from '@ionic/angular'
@Component({
  selector: 'app-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {
  public data: any = {}
  public showFlag: any = true
  public fleAttachment: any = {}
  public billNo: any = ''
  public billType: any = 'INVOICE_DOMESTIC_RECEIVE'
  constructor(
    public navParams: NavParams,
    public common: CommonService,
    public alertController: AlertController
  ) {
    this.billNo = this.navParams.data.billNo
  }

  ngOnInit() {}
  // 展开/收起
  toggleShow() {
    this.showFlag = !this.showFlag
  }

  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss()
  }
}
