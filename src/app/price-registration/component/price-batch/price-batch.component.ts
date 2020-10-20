import { Component, OnInit } from '@angular/core'
import { PriceBatchDetailComponent } from '../price-batch-detail/price-batch-detail.component'
import { CommonService } from '../../../service/common.service'
import {
  NavController,
  LoadingController,
  AlertController,
  ModalController,
  ToastController,
} from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import { AppConfig } from '../../../app.config'
@Component({
  selector: 'app-price-batch',
  templateUrl: './price-batch.component.html',
  styleUrls: ['./price-batch.component.scss'],
})
export class PriceBatchComponent implements OnInit {
  public documentTypeList: any[] = ['全部']
  public formData: any = {
    contractCode: '',
    pricingLotCode: '',
    productCode: '',
    qmQueryExtras: [],
  }
  public ladingNoFormData: any = {
    ladingBillNo: '',
    productCodeList: [],
    qmQueryExtras: [],
    supplierCode: '',
  }
  public productItemFormData: any = {
    productCode: '',
  }
  public list: [] = []
  public type: string = ''

  constructor(
    public alertController: AlertController,
    public navController: NavController,
    public common: CommonService,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public modalController: ModalController,
    public loadingController: LoadingController
  ) {}

  async ngOnInit() {
    AppConfig.dataDict.purchaseOrSale.forEach((item: any) => {
      this.documentTypeList.push(item.label)
    })
    this.getList()
  }

  async getList() {
    this.list = []
    const loading = await this.loadingController.create({
      message: '加载中...',
    })
    await loading.present()

    this.common
      .post('/pricingLot/listForReg', {
        funcModule: '定价登记新增',
        funcOperation: '查询',
        isPage: true,
        size: 20,
        data: this.formData,
      })
      .then(async (response: any) => {
        this.list = response.data
        // this.list.forEach((item: any) => {
        //   item.inQuantity = item.productQuantity
        // })
        this.loadingController.dismiss()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // 查看详情
  async detaile(item) {
    const modal = await this.modalController.create({
      component: PriceBatchDetailComponent,
      componentProps: item,
    })
    return await modal.present()
  }
  async onConfirm() {
    const list = this.list.filter((item: any) => item.disabled)
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
              AppConfig.inNotice.priceList = list[0]
              this.navController.navigateForward(['price-registration'])
            },
          },
        ],
      })
      await alert.present()
    }
  }

  selectClick(type: string) {
    const _type = AppConfig.dataDict.purchaseOrSale.filter(
      (item: any) => item.label === type
    )[0]
    if (_type) {
      this.formData.purchaseOrSale = _type.value
    } else {
      this.formData.purchaseOrSale = ''
    }
    this.getList()
  }

  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, e)
    this.getList()
  }

  onJoin(item: any) {
    this.list.forEach((element: any) => {
      element.disabled = false
    })
    item.disabled = !item.disabled
  }
  offJoin(item: any) {
    item.disabled = !item.disabled
  }
}
