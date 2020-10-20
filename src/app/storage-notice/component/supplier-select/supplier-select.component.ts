import { Component, OnInit } from '@angular/core'
import { NavController, ToastController } from '@ionic/angular'
import { CommonService } from '../../../service/common.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-supplier-select',
  templateUrl: './supplier-select.component.html',
  styleUrls: ['./supplier-select.component.scss']
})
export class SupplierSelectComponent implements OnInit {
  public refreshComplete: boolean = false
  public supplierList: [] = []
  public supplierCode: string = ''

  constructor(
    public route: ActivatedRoute,
    public navController: NavController,
    public common: CommonService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.getList()
  }

  async getList() {
    return this.common
      .post('/dd/selectData/list', {
        funcModule: '入库通知新增',
        funcOperation: '查询',
        data: {
          type: 'CUST_INFO',
          queryParams: {
            auditStatus: '3',
            typeCode: '2',
            usingFlag: '1'
          }
        }
      })
      .then(async (response: any) => {
        this.supplierList = response.data
        this.supplierList.forEach((item: any) => {
          item.show = true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  async doRefresh(event: any) {
    await this.getList()
    setTimeout(() => {
      event.target.complete()
      this.refreshComplete = true
    }, 1000)
  }

  checkInput(event: any) {
    const query = event.target.value.toLowerCase()
    requestAnimationFrame(() => {
      this.supplierList.forEach((item: any) => {
        item.show = item.name.toLowerCase().indexOf(query) > -1
      })
    })
  }

  async onConfirm() {
    if (!this.supplierCode) {
      const toast = await this.toastController.create({
        message: '请选择供应商',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger'
      })
      toast.present()
    } else {
      const supplier: any = this.supplierList.filter(
        (v: any) => v.code === this.supplierCode
      )[0]
      this.navController.navigateForward(['storage-notice'], {
        queryParams: {
          supplierCode: this.supplierCode,
          supplierName: supplier.name
        }
      })
    }
  }
}
