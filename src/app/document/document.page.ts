import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { CommonService } from '../service/common.service'

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss']
})
export class DocumentPage implements OnInit {
  constructor(
    public navController: NavController,
    public common: CommonService
  ) {}
  public documrntList: any = []
  public searchQuery: any = ''
  ngOnInit() {
    this.getList(null)
  }
  getList(e) {
    this.common
      .post('/invoice/domesticReceive/list', {
        data: {
          receiveNo: e
        },
        funcModule: '收票登记（内贸）查看',
        funcOperation: '查看'
      })
      .then((res: any) => {
        if (res.status) {
          this.documrntList = res.data
        }
      })
  }
  onSearch(e: any) {
    let val = e.target.value
    this.searchQuery = val
    if (!this.searchQuery) {
      this.getList('')
    } else {
      this.getList(this.searchQuery)
    }
  }
  editClick(item) {
    item.optype = 'edit'
    this.navController.navigateForward(['/invoice-registration'], {
      queryParams: item
    })
  }
  viewClick(item) {
    item.optype = 'view'
    this.navController.navigateForward(['/invoice-registration'], {
      queryParams: item
    })
  }
}
