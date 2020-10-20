import { Component, OnInit } from '@angular/core'
import {
  NavController,
  LoadingController,
  AlertController,
  ToastController,
  ModalController,
} from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import { CommonService } from '../../../service/common.service'
import { AppConfig } from '../../../app.config'
import { ClaimDetailListComponent } from './claim-detail-list/claim-detail-list.component'

@Component({
  selector: 'app-choose-claim-info',
  templateUrl: './choose-claim-info.component.html',
  styleUrls: ['./choose-claim-info.component.scss'],
})
export class ChooseClaimInfoComponent implements OnInit {
  public documentTypeList: any[] = []
  public formData: any = {
    auditStatus: '3',
    bizDeptCode: '',
    bizEmployeeCode: '',
    bizOrganCode: '',
    claimNo: '',
    claimType: 'A',
    customerNo: '',
    optEmployeeCode: '',
    qmQueryExtras: [],
    receiveNo: '',
    receiveType: '',
    useStatusNe: '2',
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
    AppConfig.dataDict.settlementType.forEach((item: any) => {
      this.documentTypeList.push(item.label)
    })
    this.route.queryParams.subscribe((data) => {
      this.formData.customerNo = data.customerNo
      this.formData.bizOrganCode = data.bizOrganCode
      this.getList()
    })
  }
  // 查看详情
  async detaile(item) {
    const modal = await this.modalController.create({
      component: ClaimDetailListComponent,
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
      .post('/fund/claim/list', {
        funcModule: '付款申请新增',
        funcOperation: '查询',
        isPage: true,
        size: 20,
        sortString: 'claimDate.asc, claimNo.asc',
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
              AppConfig.inNotice.claimList = list
              this.navController.navigateForward(['fund-apply'])
            },
          },
        ],
      })

      await alert.present()
    }
  }

  selectClick(type: string) {
    const _type = AppConfig.dataDict.settlementType.filter(
      (item: any) => item.label === type
    )[0]
    if (_type) {
      this.formData.receiveType = _type.value
    } else {
      this.formData.receiveType = ''
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
