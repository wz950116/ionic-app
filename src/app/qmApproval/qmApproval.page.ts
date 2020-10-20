import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { NavController, ModalController, ToastController } from '@ionic/angular'
import { CommonService } from '../service/common.service'
import { TableDetailComponent } from './component/table-detail/table-detail.component'
import { AssistConformComponent } from './component/assist-conform/assist-conform.component'
import { ApproveConformComponent } from './component/approve-conform/approve-conform.component'
import { RefuseConformComponent } from './component/refuse-conform/refuse-conform.component'
import approval from '../../assets/js/approval.js'
import approvalInfo from '../../assets/js/approvalInfo.js'
import { PdfViewerPagePage } from '../pdf-viewer-page/pdf-viewer-page.page'
import { environment } from '../../environments/environment'
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-qmApproval',
  templateUrl: './qmApproval.page.html',
  styleUrls: ['./qmApproval.page.scss']
})
export class QmApprovalPage implements OnInit {
  public dropList: any = []
  public dropShow: any = false
  public cardImgList: any = []
  public information: any = {}
  public showMap: any = {}
  public infos: any = []
  public queryData: any = {}
  public auditHistory: any = []
  public tablesData: any = {}
  public formData: any = {
    submitter: '',
    assistMsg: '',
    opinion: ''
  }
  public activeTab: any = '审批信息'
  public attachList: any = []

  constructor(
    public navController: NavController,
    public route: ActivatedRoute,
    public common: CommonService,
    public modalController: ModalController,
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.showMap = {}

    this.route.queryParams.subscribe(data => {
      console.log(data)
      this.queryData = data
      this.formData.submitter = this.queryData.submitter
      this.formData.assistMsg = this.queryData.assistMsg
      this.information =
        approval[data.bpmComponent] || approvalInfo[data.bpmComponent]
      this.infos = Object.keys(this.information).slice(1)
      // 默认展开第一个
      this.showMap[this.infos[0]] = true
      this.common
        .post(this.information['api']['get'], {
          data: data.uk,
          funcModule: data.businessName,
          funcOperation: '查看'
        })
        .then((res: any) => {
          if (res.status) {
            this.formData = Object.assign(this.formData, res.data)

            // 请求下拉选数据回显表单值
            this.infos.forEach((i: any) => {
              // 根据条件隐藏部分信息
              if (this.information[i].isHide instanceof Array) {
                const isHideFlag = []
                this.information[i].isHide.forEach((f: any) => {
                  isHideFlag.push(f.value.includes(this.formData[f.key]))
                })
                this.information[i].isHideFlag = isHideFlag.includes(true)
              }
              if (this.information[i].formData instanceof Array) {
                this.information[i].formData.forEach((form: any) => {
                  if (form.isHide instanceof Array) {
                    const isHideFlag = []
                    form.isHide.forEach((f: any) => {
                      isHideFlag.push(f.value.includes(this.formData[f.key]))
                    })
                    form.isHideFlag = isHideFlag.includes(true)
                  }
                  if (form.selectData) {
                    this.common
                      .post('/dd/selectData/list', {
                        data: form.selectData,
                        funcModule: data.businessName,
                        funcOperation: '查询'
                      })
                      .then((res: any) => {
                        if (res.status) {
                          const f = res.data.filter(
                            (v: any) => v.code === this.formData[form.prop]
                          )
                          if (f && f.length > 0) {
                            this.formData[form.prop] = f[0].name
                          }
                        }
                      })
                      .catch(err => {
                        console.log(err)
                      })
                  }
                })
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.infos.forEach((i: any) => {
        // 请求TAB列表数据
        if (this.information[i].api) {
          const params = {
            data: {},
            funcModule: data.businessName,
            funcOperation: '查询'
          }
          if (this.information[i].params || this.information[i].query) {
            if (this.information[i].params) {
              params.data = Object.assign(
                params.data,
                this.information[i].params
              )
            }
            if (this.information[i].query) {
              if (typeof this.information[i].query === 'string') {
                params.data = this.queryData[this.information[i].query]
              } else if (typeof this.information[i].query === 'object') {
                Object.keys(this.information[i].query).forEach((q: string) => {
                  params.data[q] = this.queryData[this.information[i].query[q]]
                })
              }
            }
          } else {
            delete params.data
          }
          this.common
            .post(this.information[i].api, params)
            .then((res: any) => {
              if (res.status) {
                this.tablesData[i] = res.data

                this.information[i].tableData.forEach((t: any) => {
                  if (t.selectData) {
                    this.common
                      .post('/dd/selectData/list', {
                        data: t.selectData
                      })
                      .then((res: any) => {
                        if (res.status) {
                          this.tablesData[i].forEach((row: any) => {
                            if (
                              res.data.filter(
                                (f: any) => f.code === row[t.prop]
                              )[0]
                            ) {
                              row[t.prop] = res.data.filter(
                                (f: any) => f.code === row[t.prop]
                              )[0].name
                            }
                          })
                        }
                      })
                      .catch((err: any) => {
                        console.log(err)
                      })
                  }
                })
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    })

    // 右上方下拉
    this.dropList = [
      {
        text: '批次信息'
      },
      {
        text: '提货单'
      },
      {
        text: '入库单'
      },
      {
        text: '定价单'
      },
      {
        text: '发票信息'
      },
      {
        text: '付款信息'
      },
      {
        text: '变更信息'
      }
    ]

    // 头部TAB页
    this.cardImgList = [
      {
        text: '审批信息',
        imgSrc: 'assets/img/approval/approval_information.png'
      },
      {
        text: '附件',
        imgSrc: 'assets/img/approval/approval_attachment.png'
      },
      {
        text: '审核历史',
        imgSrc: 'assets/img/approval/approval_history.png'
      }
    ]
  }

  // 展开/收起
  toggleShow(name: any) {
    this.showMap[name] = !this.showMap[name]
  }

  // 切换TAB
  cardItemClick(name: any) {
    this.activeTab = name
    if (this.activeTab === '附件') {
      this.common
        .post('/sys/file/list', {
          funcModule: this.queryData.businessName,
          funcOperation: '查询',
          data: {
            billNo: this.queryData.uk || this.formData.ladingBillNo,
            billType: this.queryData.billType
          }
        })
        .then((response: any) => {
          if (response.status) {
            this.attachList = response.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    } else if (this.activeTab === '审核历史') {
      const url =
        this.queryData.opType === 'view'
          ? '/bpm/bpmApproveTrack/listAllBusinessTrackModuleUK'
          : '/bpm/bpmApproveTrack/listAllBusinessTrack'
      const data =
        this.queryData.opType === 'view' ? this.queryData : this.queryData.id
      this.common
        .post(url, {
          funcModule: this.queryData.businessName,
          funcOperation: '查询',
          data
        })
        .then((response: any) => {
          if (response.status) {
            this.auditHistory = response.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  // 下载附件
  download(item: any) {
    this.common
      .postBlob('/sys/file/download', {
        funcModule: this.queryData.businessName,
        funcOperation: '下载',
        data: item.attachmentNo
      })
      .then((response: any) => {
        if (response) {
          const url = window.URL.createObjectURL(new Blob([response]))
          const link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', item.fileName)
          document.body.appendChild(link)
          link.click()
          link.remove()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 预览附件
  preview(item: any) {
    this.common
      .post('/sys/file/preview', {
        funcModule: this.queryData.businessName,
        funcOperation: '预览',
        data: item.attachmentNo
      })
      .then(async (response: any) => {
        if (response.status) {
          const modal = await this.modalController.create({
            component: PdfViewerPagePage,
            componentProps: {
              attachment: {
                title: '附件预览',
                pdfSource: {
                  url: environment.pdf + response.data
                }
              }
            }
          })
          await modal.present()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 查看列表每条数据详情
  async onDetail(row: any, map: any, formData: any) {
    const modal = await this.modalController.create({
      component: TableDetailComponent,
      componentProps: {
        row,
        map,
        formData
      }
    })
    return await modal.present()
  }

  // 显示选择下一层用户任务信息对话框
  showNextUserTaskNodeInfoDialog() {
    this.common
      .post('/bpm/task/listNextUserTaskNodeInfo', {
        funcModule: this.queryData.businessName,
        funcOperation: '查询',
        data: {
          taskId: this.queryData.id
        }
      })
      .then(async (response: any) => {
        if (response.status) {
          const data = response.data
          if (
            data instanceof Array &&
            data.some((i: any) => i.takeMode === '1')
          ) {
            const modal = await this.modalController.create({
              component: ApproveConformComponent,
              componentProps: {
                params: { ...this.queryData, opinion: this.formData.opinion }
              }
            })
            return await modal.present()
          } else {
            this.tocompleteGeneralAudit(1) // 调用完成一般审核操作
          }
        } else {
          const toast = await this.toastController.create({
            message: response.msgText,
            position: 'top',
            duration: 2000,
            showCloseButton: false,
            closeButtonText: '关闭',
            color: 'danger'
          })
          toast.present()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 完成一般审核操作
  tocompleteGeneralAudit(auditResultType: Number) {
    this.common
      .post('/bpm/backlog/businessCompletionBacklog', {
        funcModule: this.queryData.businessName,
        funcOperation: '发送',
        data: {
          taskId: this.queryData.id, // 任务ID
          auditOption: this.formData.opinion, // 审核意见
          auditResult: auditResultType, // 审核结果
          auditType: 0 // 审核类型  0 一般审核 1 协助审核
        }
      })
      .then(async (response: any) => {
        // 跳转至已办页面
        this.haveToDo(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 完成协助审核操作
  toCompleteAssistAudit(agreeFlgType: Number) {
    this.common
      .post('/bpm/backlog/assistAuditCompletionBacklog', {
        funcModule: this.queryData.businessName,
        funcOperation: '协助审核',
        data: {
          assistId: this.queryData.assistId, // 协助审核ID
          auditOption: agreeFlgType, // 协助意见
          agreeFlg: this.formData.opinion, // 是否同意
          auditType: 1 // 审核类型  0 一般审核 1 协助审核
        }
      })
      .then(async (response: any) => {
        // 跳转至已办页面
        this.haveToDo(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // 成功跳转至已办
  async haveToDo(response: any) {
    // 跳转至已办页面
    const toast = await this.toastController.create({
      message: response.status ? '审核成功' : response.msgText,
      position: 'top',
      duration: 2000,
      showCloseButton: false,
      closeButtonText: '关闭',
      color: response.status ? 'success' : 'danger'
    })
    toast.present()
    if (response.status) {
      this.navController.navigateForward('completed')
    }
  }

  // 审核同意操作
  async doAgree() {
    // 开启模态框
    const modal = await this.modalController.create({
      component: RefuseConformComponent,
      componentProps: {
        params: { opinion: this.formData.opinion }
      }
    })
    await modal.present()
    // 监听模态框关闭，获取数据
    const { data } = await modal.onDidDismiss()
    if (!data) return
    this.formData.opinion = data.result.opinion
    // 开启加载动画
    const loading = await this.loadingController.create({
      translucent: true,
      cssClass: 'custom-class custom-loading'
    })
    await loading.present()
    if (this.queryData.assistId) {
      this.toCompleteAssistAudit(1) // 调用完成协助审核
      //关闭加载
      this.loadingController.dismiss()
    } else {
      this.showNextUserTaskNodeInfoDialog()
      //关闭加载
      this.loadingController.dismiss()
    }
  }

  // 审核协助操作
  async doAssist() {
    const modal = await this.modalController.create({
      component: AssistConformComponent,
      componentProps: {
        params: this.queryData
      }
    })
    return await modal.present()
  }

  // 审核拒绝操作
  async doRefuse() {
    // 开启模态框
    const modal = await this.modalController.create({
      component: RefuseConformComponent,
      componentProps: {
        params: { opinion: this.formData.opinion }
      }
    })
    await modal.present()
    // 监听模态框关闭，获取数据
    const { data } = await modal.onDidDismiss()
    if (!data) return
    this.formData.opinion = data.result.opinion
    // 开启加载动画
    const loading = await this.loadingController.create({
      translucent: true,
      cssClass: 'custom-class custom-loading'
    })
    await loading.present()
    if (this.queryData.assistId) {
      this.toCompleteAssistAudit(0) // 调用完成协助审核
      //关闭加载
      this.loadingController.dismiss()
    } else {
      this.tocompleteGeneralAudit(0) // 调用完成一般审核操作，拒绝时直接提交，不选人
      this.loadingController.dismiss()
    }
  }

  // 审核取消操作
  async doCancle() {
    this.navController.navigateForward('handle')
  }
}
