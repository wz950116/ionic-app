import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CommonService } from '../../../service/common.service'
import { NavController, AlertController, ToastController } from '@ionic/angular'
import { AppConfig } from '../../../app.config'

@Component({
  selector: 'app-cust-credit-list',
  templateUrl: './cust-credit-list.component.html',
  styleUrls: ['./cust-credit-list.component.scss'],
})
export class CustCreditListComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public common: CommonService,
    public alertController: AlertController,
    public toastController: ToastController,
    public navController: NavController
  ) {}
  public productList: any = []
  public custCode: any = ''
  public documentTypeList: any[] = ['全部']
  public type: string = ''

  public formData: any = {
    custCode: this.custCode,
    docNo: '',
    billNo: '',
  }
  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.formData.custCode = data.customerNo
      this.getList()
    })
  }
  async onConfirm() {
    const list = this.productList.filter((item: any) => item.disabled)
    if (list.length === 0) {
      const toast = await this.toastController.create({
        message: '请选择一条信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    } else {
      const alert = await this.alertController.create({
        header: '',
        message: '请确认当前数据已经准确无误，是否确定保存？',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {},
          },
          {
            text: '确认',
            handler: async () => {
              AppConfig.inNotice.fundApplyList = list[0]
              this.navController.navigateForward(['fund-apply'])
            },
          },
        ],
      })

      await alert.present()
    }
  }
  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, { docNo: e.docNo })
    this.getList()
  }
  getList() {
    this.common
      .post('/cust/credit/listTempDialogCs', {
        data: this.formData,
        funcModule: '付款申请新增',
        funcOperation: '查询',
        sortString: 'custName.desc,docNo.desc',
      })
      .then((res: any) => {
        this.productList = res.data
      })
  }
  onJoin(item: any) {
    this.productList.forEach((element: any) => {
      element.disabled = false
    })
    item.disabled = !item.disabled
  }
  offJoin(item: any) {
    item.disabled = !item.disabled
  }
}
