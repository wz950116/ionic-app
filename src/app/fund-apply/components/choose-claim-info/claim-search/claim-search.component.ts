import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CommonService } from '../../../../service/common.service'
import { MenuController } from '@ionic/angular'
import { AppConfig } from '../../../../app.config'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.scss'],
})
export class ClaimSearchComponent implements OnInit {
  public productList: any = []
  public formData: any = {
    claimDateStart: '',
    claimDateEnd: '',
    claimNo: '',
    receiveNo: '',
    bizDeptCode: '',
    bizEmployeeCode: '',
    optEmployeeCode: '',
    customerNo: '',
    bizOrganCode: '',
  }
  public bizEmployeeList: any = []
  public bizDeptCodeList: any = []
  public bizEmployeeCodeList: any = []
  public optEmployeeCodeList: any = []
  @Input() type: string
  @Output() private search = new EventEmitter<string>()

  constructor(
    private menu: MenuController,
    public common: CommonService,
    public route: ActivatedRoute
  ) {}

  async ngOnInit() {
    // 客户
    const productList: any = await this.selectDataRequest({
      type: 'CUST_INFO',
    })
    this.productList = productList.data
    // 机构
    const bizEmployeeList: any = await this.selectDataRequest({
      type: 'FUNC_ORG',
    })
    this.bizEmployeeList = bizEmployeeList.data
    // 业务部门
    const bizDeptCodeList: any = await this.selectDataRequest({
      type: 'FUNC_DEPT',
    })
    this.bizDeptCodeList = bizDeptCodeList.data
    // 业务员// 制单人
    const bizEmployeeCodeList: any = await this.selectDataRequest({
      type: 'FUNC_EMPLOYEE',
    })
    this.bizEmployeeCodeList = bizEmployeeCodeList.data
    this.route.queryParams.subscribe((data) => {
      this.formData.customerNo = data.customerNo
      this.formData.bizOrganCode = data.bizOrganCode
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
      this.formData.claimDateEnd &&
      new Date(e.detail.value) > new Date(this.formData.claimDateEnd)
    ) {
      this.formData.claimDateEnd = ''
    }
  }

  changeEndTime(e: any) {
    if (
      this.formData.claimDateStart &&
      new Date(e.detail.value) < new Date(this.formData.claimDateStart)
    ) {
      this.formData.claimDateStart = ''
    }
  }
  // 重置
  screenReset() {
    this.formData.claimDateStart = ''
    this.formData.claimDateEnd = ''
    this.formData.claimNo = ''
    this.formData.receiveNo = ''
    this.formData.bizDeptCode = ''
    this.formData.bizEmployeeCode = ''
    this.formData.optEmployeeCode = ''
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
    formData.claimDateStart = this.dateFormate(formData.claimDateStart) || ''
    formData.claimDateEnd = this.dateFormate(formData.claimDateEnd) || ''
    this.search.emit(formData)
    this.menu.toggle()
  }
}
