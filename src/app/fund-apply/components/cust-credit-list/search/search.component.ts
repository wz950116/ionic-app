import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CommonService } from '../../../../service/common.service'
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public productList: any = []
  public formData: any = {
    docNo: '',
    custCode: '',
    billNo: '',
  }

  @Input() type: string
  @Output() private search = new EventEmitter<string>()

  constructor(private menu: MenuController, public common: CommonService) {}

  async ngOnInit() {}

  // 重置
  screenReset() {
    this.formData.docNo = ''
  }

  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData)
    this.search.emit(formData)
    this.menu.toggle()
  }
}
