import { Component, OnInit } from '@angular/core'
import { NavController, NavParams, ToastController } from '@ionic/angular'
import { CommonService } from '../../../service/common.service'

@Component({
  selector: 'app-refuse-conform',
  templateUrl: './refuse-conform.component.html',
  styleUrls: ['./refuse-conform.component.scss']
})
export class RefuseConformComponent implements OnInit {
  // public data: any = {}
  public formData: any = {
    opinion: ''
  }
  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public common: CommonService,
    public toastController: ToastController
  ) {
    this.formData.opinion = this.navParams.data.params.opinion
  }

  ngOnInit() {}
  async onSave() {
    if (this.formData.opinion.length <= 0) {
      const toast = await this.toastController.create({
        message: '审核意见不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger'
      })
      toast.present()
      return
    }
    this.navParams.data.modal.dismiss({
      result: {
        opinion: this.formData.opinion,
        flag: true
      }
    })
  }
  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss()
  }
}
