import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-storage-select',
  templateUrl: './storage-select.component.html',
  styleUrls: ['./storage-select.component.scss'],
})
export class StorageSelectComponent implements OnInit {
 
  public refreshComplete:boolean = false;
  public warehouseList:[] = [];
  public warehouseCode:string = "";

  constructor(public navController: NavController, public common: CommonService, public toastController: ToastController) { }

  ngOnInit() {
    this.getList()
  }

  async getList() {
    return this.common
      .post('/dd/selectData/list', {
        funcModule: '入库通知新增',
        funcOperation: '查询',
        data: {
          type: "DD_WAREHOUSE"
        }
      })
      .then(async (response: any) => {
        this.warehouseList = response.data
        this.warehouseList.forEach((item: any) => {
          item.show = true
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  async doRefresh(event: any) {
    await this.getList();
    setTimeout(() => {
      event.target.complete();
      this.refreshComplete = true;
    }, 1000)
  }

  checkInput(event: any) {
    const query = event.target.value.toLowerCase();
    requestAnimationFrame(() => {
      this.warehouseList.forEach((item: any) => {
        item.show = item.name.toLowerCase().indexOf(query) > -1;
      });
    });
  }

  async onConfirm() {
    if (!this.warehouseCode) {
      const toast = await this.toastController.create({
        message: '请选择仓库',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: "关闭",
        color: "danger"
      });
      toast.present();
    } else {
      const warehouse:any = this.warehouseList.filter((v:any) => v.code === this.warehouseCode)[0]
      this.navController.navigateForward(["storage-notice"], { queryParams: {warehouseCode: this.warehouseCode, warehouseName: warehouse.name} })
    }
  }
}
