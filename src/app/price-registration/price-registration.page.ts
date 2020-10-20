import { Component, OnInit } from '@angular/core'
import { CommonService } from '../service/common.service'
import { ActivatedRoute } from '@angular/router'
import {
  NavController,
  LoadingController,
  AlertController,
  ToastController,
} from '@ionic/angular'
import { AppConfig } from '../app.config'

@Component({
  selector: 'app-price-registration',
  templateUrl: './price-registration.page.html',
  styleUrls: ['./price-registration.page.scss'],
})
export class PriceRegistrationPage implements OnInit {
  constructor(
    public common: CommonService,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public navController: NavController,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}
  public formData: any = {
    price: '',
    pricingTime: '',
    docMakeDate: '',
    docMaker: '',
    note: '',
  }
  public showFlag: boolean = false
  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      const { priceList } = AppConfig.inNotice
      if (Object.keys(priceList).length === 0) {
        this.showFlag = false
      } else {
        this.showFlag = true
      }
      this.formData = Object.assign(this.formData, priceList)
    })
  }
  doCancle() {
    this.navController.navigateForward('/')
  }
  dateFormate(date: any) {
    if (date) {
      const year = new Date(date).getFullYear() + ''
      const month =
        new Date(date).getMonth() + 1 > 9
          ? new Date(date).getMonth() + 1
          : '0' + (new Date(date).getMonth() + 1)
      const day =
        new Date(date).getDate() > 9
          ? new Date(date).getDate()
          : '0' + new Date(date).getDate()
      return year + month + day
    }
  }
  async doSave() {
    if (!this.formData.price || !this.formData.pricingTime) {
      const toast = await this.toastController.create({
        message: '必填项不得为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (!this.formData.pricingLotCode) {
      const toast = await this.toastController.create({
        message: '定价批次选择不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    this.formData.pricingTime = this.dateFormate(this.formData.pricingTime)

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
            const loading = await this.loadingController.create({
              message: '加载中...',
            })
            await loading.present()
            this.common
              .post('/pricingInfo/save', {
                funcModule: '定价登记新增',
                funcOperation: '保存',
                data: this.formData,
              })
              .then(async (res: any) => {
                this.loadingController.dismiss()
                if (res.status) {
                  const toast = await this.toastController.create({
                    message: '保存成功',
                    position: 'top',
                    duration: 2000,
                    showCloseButton: false,
                    closeButtonText: '关闭',
                    color: 'success',
                  })
                  toast.present()
                  this.navController.navigateForward(
                    '/storage-notice/save-success'
                  )
                } else {
                  const toast = await this.toastController.create({
                    message: res.msgText,
                    position: 'top',
                    duration: 2000,
                    showCloseButton: false,
                    closeButtonText: '关闭',
                    color: 'danger',
                  })
                  toast.present()
                }
              })
          },
        },
      ],
    })
    await alert.present()
  }
}
