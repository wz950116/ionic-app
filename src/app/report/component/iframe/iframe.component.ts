import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { AppConfig } from '../../../app.config'

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent implements OnInit {
  constructor(public domSanitizer: DomSanitizer, public route: ActivatedRoute) {
    this.pageUrl = AppConfig.dataDict.iframeId
    this.srcList.forEach((element) => {
      if (element.id === this.pageUrl) {
        this.srcName = element.src
      }
    })
    this.srcName = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.srcName
    )
  }
  public srcName: any = ''
  public pageUrl: any = ''
  public srcList: any[] = [
    {
      id: 1,
      src:
        'http://124.193.69.147:10232/FineReport/decision/view/report?viewlet=zhongmian%2F%25E8%25BF%259B%25E5%258F%25A3%25E6%25A3%2589%25E6%25B1%2587%25E6%2580%25BB%25E8%25A1%25A8.cpt&op=view&token=3bfe37fbc896ddf2c308a8a790d9feec&tenantCode=8a4577dbd919675758d57999a1e891fe',
    },
    {
      id: 2,
      src:
        'http://124.193.69.147:10202/report/decision/view/report?viewlet=tingjun%2Frm%2FstrategyProfit_phone.cpt&token=0a9c21acb3dbd4a6b73221f7a294d86c&tenantCode=bbd226a62c5694b7d5c8a25a9c2c9972',
    },
    {
      id: 3,
      src:
        'http://124.193.69.147:10232/FineReport/decision/view/report?viewlet=zhongmian%2F%25E8%25BF%259B%25E5%258F%25A3%25E6%25A3%2589%25E6%25B1%2587%25E6%2580%25BB%25E8%25A1%25A8.cpt&op=view&token=3bfe37fbc896ddf2c308a8a790d9feec&tenantCode=8a4577dbd919675758d57999a1e891fe',
    },
    {
      id: 4,
      src:
        'http://124.193.69.147:10232/FineReport/decision/view/report?viewlet=zhongmian%2F%25E8%25BF%259B%25E5%258F%25A3%25E6%25A3%2589%25E6%25B1%2587%25E6%2580%25BB%25E8%25A1%25A8.cpt&op=view&token=3bfe37fbc896ddf2c308a8a790d9feec&tenantCode=8a4577dbd919675758d57999a1e891fe',
    },
    {
      id: 5,
      src:
        'http://124.193.69.147:10232/FineReport/decision/view/report?viewlet=zhongmian%2F%25E8%25BF%259B%25E5%258F%25A3%25E6%25A3%2589%25E6%25B1%2587%25E6%2580%25BB%25E8%25A1%25A8.cpt&op=view&token=3bfe37fbc896ddf2c308a8a790d9feec&tenantCode=8a4577dbd919675758d57999a1e891fe',
    },
  ]
  ngOnInit() {}
}
