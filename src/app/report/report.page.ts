import { Component, OnInit } from '@angular/core'
import { NavController } from '@ionic/angular'
import { AppConfig } from '../app.config'

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  constructor(public navController: NavController) {}

  public reportList: any[] = [
    {
      id: 1,
      url: 'assets/img/report/analysis.png',
      lable: '销售利润分析',
      number: '￥562400',
    },
    {
      id: 2,
      url: 'assets/img/report/analysis.png',
      lable: '客户额度分析',
      number: '￥562400',
    },
    {
      id: 3,
      url: 'assets/img/report/statistics.png',
      lable: '合同执行统计',
      number: '￥562400',
    },
    {
      id: 4,
      url: 'assets/img/report/percentage.png',
      lable: '库存资金占比',
      number: '￥562400',
    },
    {
      id: 5,
      url: 'assets/img/report/p_statistics.png',
      lable: '风险占比变化统计',
      number: '￥562400',
    },
  ]
  ngOnInit() {}

  showIframe(item) {
    this.navController.navigateForward(`/tabs/report/iframe`)
    AppConfig.dataDict.iframeId = item.id
  }
}
