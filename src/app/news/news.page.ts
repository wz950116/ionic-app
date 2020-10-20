import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { CommonService } from "../service/common.service";

@Component({
  selector: "app-tab2",
  templateUrl: "news.page.html",
  styleUrls: ["news.page.scss"]
})
export class NewsPage {
  constructor(public common: CommonService, public navController: NavController) {}
  public documentTypeList: any[] = ["全部", "已读", "未读"];

  public newsLists: any[] = [];
  public newsList: any[] = [];
  public current: any = 1;
  public selectDate: any = {};
  public formData: any = {
    msgTitle: "",
    readFlag: "",
    msgClassType: "",
    sendDateFrom: "",
    sendDateTo: "",
    msgTaskNo: ""
  };

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.common
      .post("/msg/my/list", {
        current: 1,
        data: {
          msgTaskNo: "",
          readFlag: this.formData.readFlag,
          msgTitle: this.formData.msgTitle,
          sendDateFrom: this.formData.sendDateFrom,
          sendDateTo: this.formData.sendDateTo,
          msgClassType: this.formData.msgClassType
        },
        funcModule: "我的消息",
        funcOperation: "查询",
        isPage: true,
        size: 20,
        sortString: "userSendDt.desc"
      })
      .then((res: any) => {
        if (res.status) {
          this.newsLists = res.data;
          this.newsLists.forEach(item => {
            item.img = this.setImg(item.msgClassType);
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  onDetail(data: any) {
    this.navController.navigateForward(["news-details"], { queryParams: data });
  }
  setImg(i: string) {
    switch (i) {
      case "3":
        return "assets/img/news/newpic1@2x.png";
      case "1":
        return "assets/img/news/newpic2@2x.png";
      case "2":
        return "assets/img/news/newpic3@2x.png";
    }
  }
  selectClick(e: string) {
    this.formData.readFlag = e === "已读" ? "1" : e === "未读" ? "0" : "";
    this.getList();
  }
  loadData(event: any) {
    this.common
      .post("/msg/my/list", {
        current: this.current + 1,
        data: {
          msgTaskNo: "",
          readFlag: this.formData.readFlag,
          msgTitle: this.formData.msgTitle,
          sendDateFrom: this.formData.sendDateFrom,
          sendDateTo: this.formData.sendDateTo,
          msgClassType: this.formData.msgClassType
        },
        funcModule: "我的消息",
        funcOperation: "查询",
        isPage: true,
        size: 20,
        sortString: "userSendDt.desc"
      })
      .then((res: any) => {
        if (res.status) {
          this.newsLists = this.newsLists.concat(res.data);
          ++this.current;
          this.newsLists.forEach(item => {
            item.img = this.setImg(item.msgClassType);
          });
          if (res.data.length < 20) {
            event.target.disabled = true;
          }
          event ? event.target.complete() : "";
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, e);
    this.getList();
  }
}
