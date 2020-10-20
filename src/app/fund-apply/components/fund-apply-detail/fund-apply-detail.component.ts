import { Component, OnInit } from '@angular/core'
import {
  NavController,
  LoadingController,
  AlertController,
  ToastController,
} from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import { CommonService } from '../../../service/common.service'
import { AppConfig } from '../../../app.config'
import { ModalController } from '@ionic/angular'
import { DetailListComponent } from './detail-list/detail-list.component'
import { from } from 'rxjs'
@Component({
  selector: 'app-fund-apply-detail',
  templateUrl: './fund-apply-detail.component.html',
  styleUrls: ['./fund-apply-detail.component.scss'],
})
export class FundApplyDetailComponent implements OnInit {
  public documentTypeList: any[] = []
  public formData: any = {
    billType: '',
    bizEmployeeCode: '',
    contractNo: '',
    customerCode: '',
    lotNo: '',
    productCode: '',
    qmQueryExtras: [],
    tradeType: '',
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
    // AppConfig.dataDict.tradeType.forEach((item: any) => {
    //   this.documentTypeList.push(item.label)
    // })
    this.route.queryParams.subscribe((data) => {
      this.formData.customerCode = data.customerNo
      this.formData.bizOrganCode = data.bizOrganCode
      if (data.businessType === 'S') {
        this.documentTypeList = ['销售批次']
        this.formData.billType = 'CON_SL_INFO'
      } else if (data.businessType === 'B') {
        this.documentTypeList = ['采购批次']
        this.formData.billType = 'CON_PL_INFO'
      } else {
        AppConfig.dataDict.billTypeLot.forEach((item: any) => {
          this.documentTypeList.push(item.label)
        })
        this.formData.billType = ''
      }
      this.getList()
    })
  }

  async getList() {
    this.list = []
    const loading = await this.loadingController.create({
      message: '加载中...',
    })
    await loading.present()
    this.common
      .post('/contract/slProductDetail/listChoosePurchaseSaleForFund', {
        funcModule: '付款申请新增',
        funcOperation: '查询',
        isPage: true,
        size: 20,
        sortString: 'docMakeDt.desc',
        data: this.formData,
      })
      .then(async (response: any) => {
        this.list = response.data
        this.loadingController.dismiss()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // 确定
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
              // 只允许选择相同批次/提单号数据
              AppConfig.inNotice.fundApplyDetailDtoList = list
              this.navController.navigateForward(['fund-apply'])
            },
          },
        ],
      })

      await alert.present()
    }
  }

  selectClick(type: string) {
    const _type = AppConfig.dataDict.billTypeLot.filter(
      (item: any) => item.label === type
    )[0]
    if (_type) {
      this.formData.billTypeLot = _type.value
    } else {
      this.formData.billType = ''
    }
    this.getList()
  }

  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, e)
    this.getList()
  }

  // 查看详情
  async detaile(item) {
    const modal = await this.modalController.create({
      component: DetailListComponent,
      componentProps: item,
    })
    return await modal.present()
  }
  onJoin(item: any) {
    item.disabled = !item.disabled
    this.onCancelEdit(item)
  }
  offJoin(item: any) {
    item.disabled = !item.disabled
    this.onActiveEdit(item)
  }

  onCancelEdit(item: any) {
    item.inQuantityEdit = true
    item.measurementQuantityEdit = true
    item.includeTaxPriceEdit = true
  }

  onActiveEdit(item: any) {
    item.inQuantityEdit = false
    item.measurementQuantityEdit = false
    item.includeTaxPriceEdit = false
  }

  inQuantitySet(item: any) {
    item.inQuantityEdit = true
    item.inQuantity =
      item.inQuantity > item.productQuantity
        ? item.productQuantity
        : item.inQuantity
    item.inQuantity = item.inQuantity < 0 ? 0 : item.inQuantity
  }

  measurementQuantitySet(item: any) {
    item.measurementQuantityEdit = true
    item.measurementQuantity =
      item.measurementQuantity > item.rmnPrdQty
        ? item.rmnPrdQty
        : item.measurementQuantity
    item.measurementQuantity =
      item.measurementQuantity < 0 ? 0 : item.measurementQuantity
  }
}
