import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { CommonService } from "../../../service/common.service";

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss'],
})
export class TableDetailComponent implements OnInit {

  public data: any = {}

  constructor(public navParams: NavParams, public common: CommonService) {
    this.data = this.navParams.data
    this.data.map.tableData.forEach((item: any) => {
      if (item.isHide instanceof Array) {
        const isHideFlag = []
        item.isHide.forEach((f: any) => {
          isHideFlag.push(f.value.includes(this.data.formData[f.key]))
        })
        item.isHideFlag = isHideFlag.includes(true)
      }
    })
  }

  ngOnInit() { }

  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss();
  }

}
