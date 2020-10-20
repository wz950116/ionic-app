import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MenuController } from '@ionic/angular'
import { CommonService } from '../../../../service/common.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public productList: any = []
  public formData: any = {
    contractCode: '',
    pricingLotCode: '',
    productCode: '',
  }

  @Input() type: string
  @Output() private search = new EventEmitter<string>()

  constructor(private menu: MenuController, public common: CommonService) {}

  async ngOnInit() {
    // 商品名称数据
    const productList: any = await this.selectListRequest({
      type: 'DD_PRODUCT',
    })
    this.productList = productList.data
  }

  selectListRequest(params: any) {
    return this.common.post('/dd/selectData/list', {
      funcModule: '定价登记新增',
      funcOperation: '查询',
      data: params,
    })
  }

  // 重置
  screenReset() {
    this.formData.contractCode = ''
    this.formData.pricingLotCode = ''
    this.formData.productCode = ''
  }

  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData)
    this.search.emit(formData)
    this.menu.toggle()
  }
}
