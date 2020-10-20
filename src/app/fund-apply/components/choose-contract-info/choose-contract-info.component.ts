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
import { ContractDetailListComponent } from './contract-detail-list/contract-detail-list.component'

@Component({
  selector: 'app-choose-contract-info',
  templateUrl: './choose-contract-info.component.html',
  styleUrls: ['./choose-contract-info.component.scss'],
})
export class ChooseContractInfoComponent implements OnInit {
  public documentTypeList: any[] = []
  public formData: any = {
    auditStatus: '3',
    bizEmployeeCode: '',
    contractNo: '',
    contractType: '',
    deliveryMarketCode: '',
    productCode: '',
    supplierCode: 'cust0000000004',
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
    AppConfig.dataDict.contractType.forEach((item: any) => {
      this.documentTypeList.push(item.label)
    })
    this.route.queryParams.subscribe((data) => {
      this.formData.supplierCode = data.customerNo
      this.formData.bizOrganCode = data.bizOrganCode
      this.getList()
    })
  }
  // 查看详情
  async detaile(item) {
    const modal = await this.modalController.create({
      component: ContractDetailListComponent,
      componentProps: item,
    })
    return await modal.present()
  }
  async getList() {
    this.list = []
    const loading = await this.loadingController.create({
      message: '加载中...',
    })
    await loading.present()
    this.common
      .post('/contract/pcInfo/listChooseForFund', {
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
              AppConfig.inNotice.contractList = list
              this.navController.navigateForward(['fund-apply'])
            },
          },
        ],
      })
      await alert.present()
    }
  }

  selectClick(type: string) {
    const _type = AppConfig.dataDict.contractType.filter(
      (item: any) => item.label === type
    )[0]
    if (_type) {
      this.formData.contractType = _type.value
    } else {
      this.formData.contractType = ''
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
