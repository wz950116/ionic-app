import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, RouterEvent } from '@angular/router'
import { CommonService } from '../service/common.service'
import {
  NavController,
  LoadingController,
  AlertController,
  ToastController,
} from '@ionic/angular'
import { AppConfig } from '../app.config'
import { query } from '@angular/core/src/render3'
@Component({
  selector: 'app-fund-apply',
  templateUrl: './fund-apply.page.html',
  styleUrls: ['./fund-apply.page.scss'],
})
export class FundApplyPage implements OnInit {
  constructor(
    public common: CommonService,
    public route: ActivatedRoute,
    public toastController: ToastController,
    public navController: NavController,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.formData.applyDate = new Date().toISOString()
  }
  public productList: any = []
  public bizOrganList: [] = []
  public bizDeptList: [] = []
  public bizEmployeeList: [] = []
  public fundApplyTypeList: [] = []
  public businessTypeList: [] = []
  public currencyList: [] = []
  public customerList: [] = []
  public paymentTypeList: [] = []
  public fundAdvApplyDtoList: any = []
  public fundApplyPaymentDtoList: any = []
  public fundApplyDetailDtoList: any = []
  public formData: any = {
    applyNo: '',
    applyDate: '',
    customerNo: '',
    applyType: 'LOT',
    contractNo: '',
    claimNo: '',
    businessType: 'B',
    applyAmount: '',
    currency: 'CNY',
    paymentTypeList: '',
    latestPaymentDate: '',
    custCreditNo: '',
    bizOrganCode: '',
    bizDeptCode: '',
    bizEmployeeCode: '',
    optEmployeeCode: '',
    remark: '',
  }
  public fundUseTypeList = []
  public showFlag: boolean = true
  public showFlag2: boolean = true
  public showFlag3: boolean = true
  async ngOnInit() {
    // 获取默认信息
    this.common
      .post('/user', {
        data: '0',
        funcModule: '登录',
        funcOperation: '查询',
      })
      .then((res: any) => {
        this.formData.bizOrganCode = res.data.userOrganCode
        this.formData.bizDeptCode = res.data.userDeptCode
        this.formData.bizEmployeeCode = res.data.userEmployeeCode
        this.formData.optEmployeeCode = res.data.userEmployeeCode
      })
      .catch((err) => {
        console.log(err)
      })
    // 客户customerNo
    const customerList: any = await this.selectDataRequest({
      type: 'CUST_INFO',
      queryParams: { usingFlag: '1', auditStatus: '3', typeCode: '2' },
    })
    // 机构
    const bizOrganList: any = await this.selectDataRequest({
      type: 'FUNC_ORG',
    })
    this.bizOrganList = bizOrganList.data
    // 部门
    const bizDeptList: any = await this.selectDataRequest({
      type: 'FUNC_DEPT',
    })
    this.bizDeptList = bizDeptList.data
    // 员工
    const bizEmployeeList: any = await this.selectDataRequest({
      type: 'FUNC_EMPLOYEE',
    })
    this.bizEmployeeList = bizEmployeeList.data

    this.customerList = customerList.data
    this.route.queryParams.subscribe((data) => {
      const {
        priceList,
        fundApplyList,
        fundApplyDetailDtoList,
        contractList,
        claimList,
      } = AppConfig.inNotice
      this.fundApplyTypeList = AppConfig.dataDict.fundApplyType
      this.fundUseTypeList = AppConfig.dataDict.fundUseType
      this.businessTypeList = AppConfig.dataDict.fundApplyBusinessType
      this.currencyList = AppConfig.dataDict.currency
      this.paymentTypeList = AppConfig.dataDict.settlementTypePay
      this.formData.custCreditNo = fundApplyList.custCreditNo
      if (contractList.length !== 0) {
        this.formData.contractNo = contractList[0].contractNo
      }
      if (claimList.length !== 0) {
        this.formData.claimNo = claimList[0].claimNo
        this.formData.customerNo = claimList[0].customerNo
        this.formData.applyAmount = (
          Number(claimList[0].claimAmount) - Number(claimList[0].usedAmount)
        ).toFixed(2)
        this.formData.currency = claimList[0].currency
      }
      // 选择批次回调
      if (fundApplyDetailDtoList.length !== 0) {
        const date = []
        data = fundApplyDetailDtoList
        data.forEach((row, index) => {
          row.lotDetailNo = row.productDetailNo
          row.lotType = row.billType
          row.fundUseType = 'GOODS'
          row.lotMeasurementQuantity = row.measurementQuantity
          row.lotPrice = row.estimatedPrice
          row.originalAmount = Number(row.originalAmount).toFixed(2)
          row.goodsAmount = Number(row.goodsAmount).toFixed(2)
          row.applyingAmount = Number(row.applyAmount).toFixed(2)
          row.hasPaymentAmount = Number(row.hasPaymentAmount).toFixed(2)
          row.applyAmount = Number(row.noneApplyAmount).toFixed(2)
          row.remark = ''
          this.fundApplyDetailDtoList.push(row)
        })
        // 后过滤
        const newData = []
        this.fundApplyDetailDtoList.forEach((row) => {
          if (
            !newData
              .map((v) => {
                return v.lotNo + v.lotDetailNo
              })
              .includes(row.lotNo + row.lotDetailNo)
          ) {
            newData.push(row)
          }
        })
        this.fundApplyDetailDtoList = newData
        this.onApplyAmountChange()
      }

      if (Object.keys(priceList).length === 0) {
        this.showFlag3 = false
      } else {
        this.showFlag3 = true
      }
      this.formData = Object.assign(this.formData, priceList)
    })
  }
  selectDataRequest(params: any) {
    return this.common.post('/dd/selectData/list', {
      funcModule: '付款申请新增',
      funcOperation: '查询',
      data: params,
    })
  }
  // 临时授信
  async custCreditNSelect() {
    if (this.formData.customerNo === '') {
      const toast = await this.toastController.create({
        message: '请输入客户信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    this.navController.navigateForward(
      `/fund-apply/cust-credit-list?customerNo=${this.formData.customerNo}`
    )
  }
  // 采购合同
  async contractNoSelect() {
    // 输入验证
    if (this.formData.customerNo === '') {
      const toast = await this.toastController.create({
        message: '请输入客户信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (this.formData.bizOrganCode === '') {
      const toast = await this.toastController.create({
        message: '请输入客户信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    this.navController.navigateForward(
      `/fund-apply/choose-contract-info?customerNo=${this.formData.customerNo}&bizOrganCode=${this.formData.bizOrganCode}`
    )
  }
  // 客户change事件
  customerNoChange(val) {
    this.formData.customerNo = val.detail.value
    this.clearContractInfo(null)
    this.clearClaimInfo(null)
    this.clearApplyDetailInfo(true)
    this.common
      .post('/fund/apply/listAdvApplyByCustomerNo', {
        funcModule: '付款申请新增',
        funcOperation: '查询',
        data: this.formData.customerNo,
      })
      .then((res: any) => {
        this.fundAdvApplyDtoList = res.data
      })
      .catch(() => {
        this.fundAdvApplyDtoList = []
      })
  }
  // 采购合同
  async claimNoSelect() {
    // 输入验证
    if (this.formData.customerNo === '') {
      const toast = await this.toastController.create({
        message: '请输入客户信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (this.formData.bizOrganCode === '') {
      const toast = await this.toastController.create({
        message: '请输入客户信息',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    this.navController.navigateForward(
      `/fund-apply/choose-claim-info?customerNo=${this.formData.customerNo}&bizOrganCode=${this.formData.bizOrganCode}`
    )
  }
  // 清空采购合同信息
  clearContractInfo(isInit) {
    this.formData.contractNo = ''
    if (isInit) {
      this.formData.applyAmount = ''
    }
  }
  // 清空预收款认领信息
  clearClaimInfo(isInit) {
    this.formData.claimNo = ''
    if (isInit) {
      this.formData.applyAmount = ''
    }
  }
  // 清空申请详细信息
  clearApplyDetailInfo(isInit) {
    if (this.fundApplyDetailDtoList[0] && isInit) {
      this.fundApplyDetailDtoList = []
      this.formData.applyAmount = ''
    }
  }
  // 申请金额change事件
  onApplyAmountChange() {
    var applyAmount: any = 0
    this.fundApplyDetailDtoList.forEach((row) => {
      applyAmount = (Number(applyAmount) + Number(row.applyAmount)).toFixed(2)
    })
    this.formData.applyAmount = applyAmount + ''
    this.applyAmountChange(applyAmount)
  }
  // 申请金额change事件
  applyAmountChange(val) {
    var fundApplyPaymentDtoList = this.fundApplyPaymentDtoList
    fundApplyPaymentDtoList.forEach((fundApplyPaymentDto, index) => {
      fundApplyPaymentDto.applyAmount = (
        (Number(val) * Number(fundApplyPaymentDto.paymentRate)) /
        100
      ).toFixed(2)
    })
    this.fundApplyPaymentDtoList = fundApplyPaymentDtoList
  }

  // 选择批次
  async detailonClick() {
    if (!this.formData.customerNo) {
      const toast = await this.toastController.create({
        message: '客户选择不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (!this.formData.businessType) {
      const toast = await this.toastController.create({
        message: '业务类别不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (!this.formData.bizOrganCode) {
      const toast = await this.toastController.create({
        message: '业务机构不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    this.navController.navigateForward(
      `/fund-apply/fund-apply-detail?customerNo=${this.formData.customerNo}&businessType=${this.formData.businessType}&bizOrganCode=${this.formData.bizOrganCode}`
    )
  }
  // 付款方式change事件
  paymentTypeChange(vals) {
    this.fundApplyPaymentDtoList = []
    if (vals.detail.value.length > 0) {
      var paymentRate: any = ''
      paymentRate = (Number(100) / Number(vals.detail.value.length)).toFixed(2)
      vals.detail.value.forEach((val, index): any => {
        var fundApplyPaymentDto: any = {}
        fundApplyPaymentDto.paymentType = val
        if (index === vals.detail.value.length - 1) {
          const number2: any = (Number(paymentRate) * index).toFixed(2)
          paymentRate = (Number(100) - number2).toFixed(2)
        }
        fundApplyPaymentDto.paymentRate = paymentRate
        fundApplyPaymentDto.applyAmount = (
          (Number(this.formData.applyAmount) * Number(paymentRate)) /
          100
        ).toFixed(2)
        fundApplyPaymentDto.remark = ''
        this.fundApplyPaymentDtoList.push(fundApplyPaymentDto)
      })
    }
  }
  // 申请类型change事件
  applyTypeChange(vals) {
    const val = vals.detail.value
    if (val === 'A') {
      // 预付款
      this.formData.applyAmount = ''
      this.formData.contractNo = ''
      this.fundApplyDetailDtoList = []
    }
    if (val === 'RA') {
      // 退预收款
      this.formData.applyAmount = ''
      this.formData.claimNo = ''
      this.fundApplyDetailDtoList = []
    }
    if (val === 'LOT') {
      this.formData.contractNo = ''
      this.formData.claimNo = ''
      this.formData.applyAmount = ''
      this.fundApplyDetailDtoList = []
    }
  }
  // 业务类别change事件
  businessTypeChange(val) {
    this.clearApplyDetailInfo(true)
  }
  doCancle() {
    this.navController.navigateForward('/')
  }
  async doSave() {
    const parms = this.formData
    parms.fundApplyDetailDtoList = this.fundApplyDetailDtoList
    parms.fundApplyPaymentDtoList = this.fundApplyPaymentDtoList
    parms.fundAdvApplyDtoList = this.fundAdvApplyDtoList
    if (
      !this.formData.applyDate ||
      !this.formData.customerNo ||
      !this.formData.applyType ||
      !this.formData.applyAmount ||
      !this.formData.currency ||
      !this.formData.bizDeptCode ||
      !this.formData.bizOrganCode ||
      !this.formData.bizEmployeeCode ||
      !this.formData.optEmployeeCode
    ) {
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
    if (this.formData.applyType === 'LOT' && !this.formData.businessType) {
      const toast = await this.toastController.create({
        message: '业务类别选择不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    if (this.formData.applyType === 'RA' && !this.formData.claimNo) {
      const toast = await this.toastController.create({
        message: '预收款单号不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger',
      })
      toast.present()
      return
    }
    parms.applyDate = this.dateFormate(parms.applyDate)
    parms.latestPaymentDate = this.dateFormate(parms.latestPaymentDate)
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
              .post('/fund/apply/save', {
                funcModule: '付款申请新增',
                funcOperation: '保存',
                data: parms,
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
  // 选择批次删行
  async remove(e) {
    const alert = await this.alertController.create({
      header: '提示',
      message: '确认是否删除？',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          // cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: '确认',
          handler: () => {
            this.fundApplyDetailDtoList.splice(
              this.fundApplyDetailDtoList.indexOf(e),
              1
            )
            this.onApplyAmountChange()
          },
        },
      ],
    })
    await alert.present()
  }
}
