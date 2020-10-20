import { Component, OnInit } from '@angular/core'
import { CommonService } from '../service/common.service'

@Component({
  selector: 'app-worker',
  templateUrl: 'worker.page.html',
  styleUrls: ['worker.page.scss'],
})
export class WorkerPage implements OnInit {
  public list: any = [
    {
      imgSrc: 'assets/img/worker/todo.png',
      title: '待办',
      routePath: '/handle',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/complete.png',
      title: '已办',
      routePath: '/completed',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/invoice.png',
      title: '我的单据',
      routePath: '/document',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/price.png',
      title: '定价登记',
      routePath: '/price-registration',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/notice.png',
      title: '提单登记',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/inOrder.png',
      title: '入库通知',
      routePath: '/storage-notice',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/outOrder.png',
      title: '出库通知',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/payApply.png',
      title: '付款申请',
      routePath: '/fund-apply',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/receipt.png',
      title: '收款登记',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/approval.png',
      title: '开信用证申请',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/invoice.png',
      title: '开票申请(内)',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/invoice.png',
      title: '收票登记(内)',
      routePath: '/invoice-registration',
      count: 0,
      disabled: false,
    },
    {
      imgSrc: 'assets/img/worker/invoice.png',
      title: '开票登记(外)',
      count: 0,
      disabled: true,
    },
    {
      imgSrc: 'assets/img/worker/invoice.png',
      title: '收票登记(外)',
      count: 0,
      disabled: true,
    },
  ]
  public approvalCount: any = 0

  constructor(public common: CommonService) {}

  ngOnInit() {
    this.common
      .post('/bpm/backlog/listExtWithReceive', {
        camelToUnderlineFlg: false,
        current: 1,
        data: {},
        funcModule: '待办事项',
        funcOperation: '查询',
        sortString: 'startTime.desc',
      })
      .then((res: any) => {
        if (res.status) {
          this.list[0].count = res.total
          sessionStorage.setItem('approvalCount', res.total)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
