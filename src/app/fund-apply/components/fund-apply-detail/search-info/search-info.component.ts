import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CommonService } from '../../../../service/common.service'
import { MenuController } from '@ionic/angular'
import { AppConfig } from '../../../../app.config'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.scss'],
})
export class SearchInfoComponent implements OnInit {
  public productList: any = []
  public formData: any = {
    signDateFrom: '',
    signDateTo: '',
    billType: '',
    contractNo: '',
    lotNo: '',
    productCode: '',
    tradeType: '',
    bizEmployeeCode: '',
  }
  public billTypeLot: any = []
  public bizEmployeeList: any = []
  public tradeTypeList: any = []
  bizEmployeeCode
  @Input() type: string
  @Output() private search = new EventEmitter<string>()

  constructor(
    private menu: MenuController,
    public common: CommonService,
    public route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.tradeTypeList = AppConfig.dataDict.tradeType
    // 机构
    const productList: any = await this.selectDataRequest({
      type: 'DD_PRODUCT',
    })
    this.productList = productList.data
    // 机构
    const bizEmployeeList: any = await this.selectDataRequest({
      type: 'FUNC_EMPLOYEE',
    })
    this.bizEmployeeList = bizEmployeeList.data

    this.route.queryParams.subscribe((data) => {
      if (data.businessType === 'A') {
        this.formData.billType = 'CON_SL_INFO'
        this.type = 'CON_SL_INFO'
      } else if (data.businessType === 'B') {
        this.formData.billType = 'CON_PL_INFO'
        this.type = 'CON_PL_INFO'
      } else {
        this.formData.billType = ''
        this.type = ''
      }
    })
  }
  selectDataRequest(params: any) {
    return this.common.post('/dd/selectData/list', {
      funcModule: '付款申请新增',
      funcOperation: '查询',
      data: params,
    })
  }
  changeStartTime(e: any) {
    if (
      this.formData.sendDateTo &&
      new Date(e.detail.value) > new Date(this.formData.sendDateTo)
    ) {
      this.formData.sendDateTo = ''
    }
  }

  changeEndTime(e: any) {
    if (
      this.formData.sendDateFrom &&
      new Date(e.detail.value) < new Date(this.formData.sendDateFrom)
    ) {
      this.formData.sendDateFrom = ''
    }
  }
  // 重置
  screenReset() {
    this.formData.signDateFrom = ''
    this.formData.signDateTo = ''
    this.formData.billType = ''
    this.formData.contractNo = ''
    this.formData.lotNo = ''
    this.formData.tradeType = ''
    this.formData.productCode = ''
    this.formData.bizEmployeeCode = ''
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
  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData)
    formData.signDateFrom = this.dateFormate(formData.signDateFrom) || ''
    formData.signDateTo = this.dateFormate(formData.signDateTo) || ''
    this.search.emit(formData)
    this.menu.toggle()
  }
}
