import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuController } from "@ionic/angular";
import { CommonService } from '../../../../service/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public supplierList: [] = [];
  public productList: [] = [];
  public formData: any = {
    signDateFrom: "",
    signDateTo: "",
    lotNo: "",
    supplierCode: "",
    productCode: ""
  };

  @Input() type: string;
  @Output() private search = new EventEmitter<string>();

  constructor(private menu: MenuController, public common: CommonService) {}

  async ngOnInit() {
    // 供应商数据
    const supplierList: any = await this.selectListRequest({
      type: "CUST_INFO",
      queryParams: {
        auditStatus: "3",
        typeCode: "2",
        usingFlag: "1"
      }
    })
    this.supplierList = supplierList.data
    // 商品名称数据
    const productList: any = await this.selectListRequest({
      type: "DD_SPOT_MARKET"
    })
    this.productList = productList.data
  }

  selectListRequest(params: any) {
    return this.common
      .post('/dd/selectData/list', {
        funcModule: "入库通知新增",
        funcOperation: "查询",
        isPage: true,
        size: 20,
        sortString: "docMakeDt.desc",
        data: params
      })
  }

  changeStartTime(e: any) {
    if (
      this.formData.signDateTo &&
      new Date(e.detail.value) > new Date(this.formData.signDateTo)
    ) {
      this.formData.signDateTo = "";
    }
  }

  changeEndTime(e: any) {
    if (
      this.formData.signDateFrom &&
      new Date(e.detail.value) < new Date(this.formData.signDateFrom)
    ) {
      this.formData.signDateFrom = "";
    }
  }

  dateFormate(date: any) {
    if (date) {
      const year = new Date(date).getFullYear() + "";
      const month =
        new Date(date).getMonth() + 1 > 9
          ? new Date(date).getMonth() + 1
          : "0" + (new Date(date).getMonth() + 1);
      const day =
        new Date(date).getDate() > 9
          ? new Date(date).getDate()
          : "0" + new Date(date).getDate();
      return year + month + day;
    }
  }

  // 重置
  screenReset() {
    this.formData.signDateFrom = "";
    this.formData.signDateTo = "";
    this.formData.lotNo = "";
    this.formData.supplierCode = "";
    this.formData.productCode = "";
  }

  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData);
    formData.signDateFrom = this.dateFormate(formData.signDateFrom) || "";
    formData.signDateTo = this.dateFormate(formData.signDateTo) || "";
    this.search.emit(formData);
    this.menu.toggle();
  }
}
