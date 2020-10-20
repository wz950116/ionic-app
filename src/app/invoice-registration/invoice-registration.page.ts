import { Component, OnInit } from '@angular/core'
// import { ModalController, ToastController } from '@ionic/angular'
import { ActivatedRoute } from '@angular/router'
import {
  NavController,
  AlertController,
  ToastController,
  ActionSheetController,
} from '@ionic/angular'
import { CommonService } from '../service/common.service'
import { AppConfig } from '../app.config'
import { ModalController } from '@ionic/angular'
// import { AttachmentComponent } from './components/attachment/attachment.component'
@Component({
  selector: 'app-invoice-registration',
  templateUrl: './invoice-registration.page.html',
  styleUrls: ['./invoice-registration.page.scss'],
})
export class InvoiceRegistrationPage implements OnInit {
  public optype: any = 'add'
  public bizOrganList: any = []
  public bizDeptList: any = []
  public bizEmployeeList: any = []
  public showFlag: any = true
  public formData: any = {
    invoiceNo: '',
    customerNo: '',
    customerName: '',
    includeTaxAmount: '',
    currency: 'CNY',
    invoiceDate: '',
    bizOrganCode: '',
    bizDeptCode: '',
    bizEmployeeCode: '',
    remark: '',
  }
  public productNames: any = []
  public supplierList: any = []
  public productList: any = []
  public curreryList: any = []
  public name: any = ''

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public navController: NavController,
    public common: CommonService,
    public route: ActivatedRoute,
    public actionSheetController: ActionSheetController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.curreryList = AppConfig.dataDict.currency
    // 获取默认信息
    this.common
      .post('/user', {
        data: '0',
        funcModule: '登录',
        funcOperation: '查询',
      })
      .then((res: any) => {
        this.formData.invoiceDate = res.data.timeNow
        this.formData.bizOrganCode = res.data.userOrganCode
        this.formData.bizDeptCode = res.data.userDeptCode
        this.formData.bizEmployeeCode = res.data.userEmployeeCode
      })
      .catch((err) => {
        console.log(err)
      })

    this.route.queryParams.subscribe((data) => {
      this.formData = Object.assign(this.formData, data)
      if (!data.optype) return
      this.optype = data.optype
      if (this.optype === 'edit') {
        this.common
          .post('/invoice/domesticReceive/get', {
            data: data.receiveNo,
            funcModule: '收票登记（内贸）修改',
            funcOperation: '查看',
          })
          .then((res: any) => {
            if (res.status) {
              this.formData = Object.assign(this.formData, res.data)
              this.formData.invoiceDate = this.dateFormate2(
                this.formData.invoiceDate
              )
              this.supplierList.forEach((item: any) => {
                if (this.formData.customerNo === item.code) {
                  this.formData.customerName = item.name
                }
              })
            }
          })
        this.common
          .post('/invoice/domReceDetail/listByReceiveNo', {
            data: data.receiveNo,
            funcModule: '收票登记（内贸）修改',
            funcOperation: '查看',
          })
          .then((res: any) => {
            if (res.status) {
              this.productList = res.data
            }
          })
      }
      // 获取查看页面数据
      if (this.optype === 'view') {
        this.common
          .post('/invoice/domesticReceive/get', {
            data: data.receiveNo,
            funcModule: '收票登记（内贸）查看',
            funcOperation: '查看',
          })
          .then((res: any) => {
            if (res.status) {
              this.formData = Object.assign(this.formData, res.data)
              AppConfig.dataDict.auditStatus.forEach((item) => {
                if (res.data.auditStatus === item.value) {
                  this.formData.auditStatus = item.label
                }
              })
              this.formData.invoiceDate = this.dateFormate2(
                this.formData.invoiceDate
              )
              this.supplierList.forEach((item: any) => {
                if (this.formData.customerNo === item.code) {
                  this.formData.customerName = item.name
                }
              })
            }
          })
        // 获取发票信息
        this.common
          .post('/invoice/domReceDetail/listByReceiveNo', {
            data: data.receiveNo,
            funcModule: '收票登记（内贸）查看',
            funcOperation: '查询',
          })
          .then((res: any) => {
            if (res.status) {
              this.productList = res.data
            }
          })
      }
    })
    // 获取供应商列表
    this.common
      .post('/dd/selectData/list', {
        funcModule: '入库通知新增',
        funcOperation: '查询',
        data: {
          type: 'CUST_INFO',
          queryParams: {
            auditStatus: '3',
            typeCode: '2',
            usingFlag: '1',
          },
        },
      })
      .then(async (response: any) => {
        this.supplierList = response.data
      })
      .catch((err) => {
        console.log(err)
      })

    // 获取业务机构信息（x下拉）
    this.common
      .post('/dd/selectData/list', {
        data: { type: 'FUNC_DEPT' },
        funcModule: '收票登记（内贸）新增',
        funcOperation: '查询',
      })
      .then((res: any) => {
        if (res.status) {
          this.bizDeptList = res.data
        }
      })
    // 获取业务机构信息（x下拉）
    this.common
      .post('/dd/selectData/list', {
        data: { type: 'FUNC_DEPT' },
        funcModule: '收票登记（内贸）新增',
        funcOperation: '查询',
      })
      .then((res: any) => {
        if (res.status) {
          this.bizDeptList = res.data
        }
      })
    // 获取部门信息（x下拉）
    this.common
      .post('/dd/selectData/list', {
        data: { type: 'FUNC_ORG' },
        funcModule: '收票登记（内贸）新增',
        funcOperation: '查询',
      })
      .then((res: any) => {
        if (res.status) {
          this.bizOrganList = res.data
        }
      })
    // FUNC_EMPLOYEE（x下拉）
    this.common
      .post('/dd/selectData/list', {
        data: { type: 'FUNC_EMPLOYEE' },
        funcModule: '收票登记（内贸）新增',
        funcOperation: '查询',
      })
      .then((res: any) => {
        if (res.status) {
          this.bizEmployeeList = res.data
        }
      })
    // 获取商品信息（x下拉）
    this.common
      .post('/dd/selectData/list', {
        data: { type: 'DD_PRODUCT' },
        funcModule: '收票登记（内贸）新增',
        funcOperation: '查询',
      })
      .then((res: any) => {
        if (res.status) {
          this.productNames = res.data
        }
      })
  }
  supplierSelect() {
    this.navController.navigateForward('/invoice-registration/supplier')
  }
  async onAddProduct() {
    const alert = await this.alertController.create({
      header: '添加',
      message: '',
      inputs: [
        {
          name: 'addList',
          type: 'radio',
          label: '添加明细',
          value: '1',
          checked: true,
        },
        {
          name: 'documents',
          type: 'radio',
          label: '入库单',
          value: '0',
          checked: false,
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {},
        },
        {
          text: '确认',
          handler: (val) => {
            if (val === '1') {
              this.productList.push({
                productCode: '',
                invoiceName: '',
                invoiceQuantity: '',
                excludeTaxPrice: '',
                excludeTaxAmount: '',
                taxRate: '',
                taxAmount: '',
                includeTaxPrice: '',
                includeTaxAmount: '',
                remark: '',
              })
            }
          },
        },
      ],
    })

    await alert.present()
  }
  // 展开/收起
  toggleShow() {
    this.showFlag = !this.showFlag
  }

  // 商品change事件
  productCodeChange(param) {
    if (param.productCode) {
      this.common
        .post('/dd/product/get', {
          data: param.productCode,
          funcModule: '收票登记（内贸）查看',
          funcOperation: '查看',
        })
        .then((response: any) => {
          param.invoiceName = response.data.productName
        })
        .catch(() => {
          param.invoiceName = ''
        })
    } else {
      param.invoiceName = ''
    }
  }
  // 发票数量change事件
  invoiceQuantityChange(param) {
    // // 数量修改影响不含税单价、含税单价
    if (Number(param.invoiceQuantity) !== 0) {
      param.excludeTaxPrice = (
        Number(param.excludeTaxAmount) / Number(param.invoiceQuantity)
      ).toFixed(6)
      param.includeTaxPrice = (
        Number(param.includeTaxAmount) / Number(param.invoiceQuantity)
      ).toFixed(2)
    } else {
      param.excludeTaxPrice = '0'
      param.includeTaxPrice = '0'
    }
  }
  // 不含税金额change事件
  excludeTaxAmountChange(row) {
    // 不含税金额修改，影响不含税单价、税额、含税金额、含税单价
    row.taxAmount = (
      (Number(row.excludeTaxAmount) * Number(row.taxRate)) /
      100
    ).toFixed(2)
    row.includeTaxAmount = (
      Number(row.excludeTaxAmount) + Number(row.taxAmount)
    ).toFixed(2)
    if (Number(row.invoiceQuantity) !== 0) {
      row.excludeTaxPrice = (
        Number(row.excludeTaxAmount) / Number(row.invoiceQuantity)
      ).toFixed(6)
      row.includeTaxPrice = (
        Number(row.includeTaxAmount) / Number(row.invoiceQuantity)
      ).toFixed(2)
    } else {
      row.excludeTaxPrice = '0'
      row.includeTaxPrice = '0'
    }
    this.sumDetail()
  }
  // 税率change事件
  taxRateChange(row) {
    // 税率修改，影响税额、含税金额、含税单价
    row.taxAmount = (
      (Number(row.excludeTaxAmount) * Number(row.taxRate)) /
      100
    ).toFixed(2)
    row.includeTaxAmount = (
      Number(row.excludeTaxAmount) + Number(row.taxAmount)
    ).toFixed(2)
    if (Number(row.invoiceQuantity) !== 0) {
      row.includeTaxPrice = (
        Number(row.includeTaxAmount) / Number(row.invoiceQuantity)
      ).toFixed(2)
    } else {
      row.includeTaxPrice = '0'
    }
    this.sumDetail()
  }
  // 含税金额change事件
  includeTaxAmountChange(row) {
    // 含税金额修改，影响含税单价、税额、不含税金额、不含税单价
    row.excludeTaxAmount = (
      Number(row.includeTaxAmount) /
      (1 + Number(row.taxRate) / 100)
    ).toFixed(2)
    row.taxAmount = (
      Number(row.includeTaxAmount) - Number(row.excludeTaxAmount)
    ).toFixed(2)
    if (Number(row.invoiceQuantity) !== 0) {
      row.excludeTaxPrice = (
        Number(row.excludeTaxAmount) / Number(row.invoiceQuantity)
      ).toFixed(6)
      row.includeTaxPrice = (
        Number(row.includeTaxAmount) / Number(row.invoiceQuantity)
      ).toFixed(2)
    } else {
      row.excludeTaxPrice = '0'
      row.includeTaxPrice = '0'
    }
    this.sumDetail()
  }
  // 计算合计信息
  sumDetail() {
    var excludeTaxAmount: any = 0
    var taxAmount: any = 0
    var includeTaxAmount: any = 0
    this.productList.forEach((row) => {
      excludeTaxAmount = (
        Number(excludeTaxAmount) + Number(row.excludeTaxAmount)
      ).toFixed(2)
      taxAmount = (Number(taxAmount) + Number(row.taxAmount)).toFixed(2)
      includeTaxAmount = (
        Number(includeTaxAmount) + Number(row.includeTaxAmount)
      ).toFixed(2)
    })
    this.formData.excludeTaxAmount = excludeTaxAmount + ''
    this.formData.taxAmount = taxAmount + ''
    this.formData.includeTaxAmount = includeTaxAmount + ''
  }
  // 取消操作
  async doCancle() {
    this.navController.navigateForward('work')
  }
  async toast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 2000,
      showCloseButton: false,
      closeButtonText: '关闭',
      color: 'danger',
    })
    toast.present()
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
  dateFormate2(date: any) {
    if (date) {
      const year = date.slice(0, 4)
      const month = date.slice(4, 6)
      const day = date.slice(6, 8)

      return year + '-' + month + '-' + day
    }
  }
  // 保存
  async doSave() {
    let toastFlag = true
    if (this.formData.invoiceNo.length <= 0) {
      this.toast('发票号不能为空')
      toastFlag = false
      return
      return
    } else if (this.formData.customerNo.length <= 0) {
      this.toast('供应商不能为空')
      toastFlag = false
      return
    } else if (this.formData.includeTaxAmount.length <= 0) {
      this.toast('含税金额不能为空')
      toastFlag = false
      return
    } else if (this.formData.currency.length <= 0) {
      this.toast('币种不能为空')
      toastFlag = false
      return
    } else if (this.productList.length <= 0) {
      this.toast('商品信息不能为空')
      toastFlag = false
      return
    }
    this.productList.forEach((item, index) => {
      for (let key in item) {
        if (
          key !== 'remark' &&
          key !== 'productCode' &&
          key !== 'invoiceName'
        ) {
          Number(item[key])
        }
        if (key === 'remark') {
          toastFlag = true
        } else {
          if (key === 'productCode' && item[key] === '') {
            this.toast('商品信息必填')
            toastFlag = false
            return
          }
          if (key === 'invoiceName' && item[key] === '') {
            this.toast('发票名称必填')
            toastFlag = false
            return
          }
          if (
            key !== 'productCode' &&
            key !== 'invoiceName' &&
            item[key] === ''
          ) {
            this.toast(key + '必填')
            toastFlag = false
            return
          }
        }
      }
    })
    if (toastFlag) {
      const alert = await this.alertController.create({
        header: '提示',
        message: '请确认当前数据已经准确无误，是否确定保存？',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: (blah) => {},
          },
          {
            text: '确认',
            handler: () => {
              if (this.optype === 'add') {
                this.formData.invoiceDate = this.dateFormate(
                  this.formData.invoiceDate
                )
                let params = this.formData
                params.invoiceDomReceDetailDtoList = this.productList
                this.common
                  .post('/invoice/domesticReceive/save', {
                    data: params,
                    funcModule: '收票登记（内贸）新增',
                    funcOperation: '保存',
                  })
                  .then(async (res: any) => {
                    if (res.status) {
                      this.navController.navigateForward(
                        '/storage-notice/save-success'
                      )
                    }
                  })
              } else if (this.optype === 'edit') {
                let params = this.formData
                params.invoiceDomReceDetailDtoList = this.productList
                this.common
                  .post('/invoice/domesticReceive/update', {
                    data: params,
                    funcModule: '收票登记（内贸）修改',
                    funcOperation: '保存',
                  })
                  .then(async (res: any) => {
                    if (res.status) {
                      this.navController.navigateForward(
                        '/storage-notice/save-success'
                      )
                    }
                  })
              }
            },
          },
        ],
      })
      await alert.present()
    }
  }
  async doAgree() {}
  // 删行
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
            this.productList.splice(this.productList.indexOf(e), 1)
          },
        },
      ],
    })
    await alert.present()
  }
}
