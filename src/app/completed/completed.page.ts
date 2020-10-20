import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { CommonService } from "../service/common.service";

@Component({
  selector: "app-completed",
  templateUrl: "./completed.page.html",
  styleUrls: ["./completed.page.scss"]
})
export class CompletedPage implements OnInit {
  constructor(
    public common: CommonService,
    public navController: NavController
  ) {}

  public btntext: string = "查看";
  public documentType: string = "全部";
  public documentTypeList: any[] = ["全部"];
  public approvalList: any[] = [];
  public current: any = 1;
  public formData: any = {
    toDoDate: "",
    toDoDateEnd: "",
    toDoDateStart: ""
  };

  ngOnInit() {
    this.getList();
  }
  getList(e: any = null) {
    this.common
      .post("/bpm/backlog/listHaveFinished", {
        camelToUnderlineFlg: false,
        current: 1,
        data: this.formData,
        funcModule: "已办事项",
        funcOperation: "查询",
        isPage: true,
        size: 20,
        sortString: "endTime.desc"
      })
      .then((res: any) => {
        if (res.status) {
          this.approvalList = res.data;
          this.approvalList.forEach((item: any) => {
            if (
              item.moduleName &&
              !this.documentTypeList.includes(item.moduleName)
            )
              this.documentTypeList.push(item.moduleName);
          });

          if (e) {
            setTimeout(() => {
              e.target.complete();
            }, 1000)
          };
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  loadData(event: any) {
    this.common
      .post("/bpm/backlog/listHaveFinished", {
        camelToUnderlineFlg: false,
        current: this.current + 1,
        data: this.formData,
        funcModule: "已办事项",
        funcOperation: "查询",
        isPage: true,
        size: 20,
        sortString: "endTime.desc"
      })
      .then((res: any) => {
        if (res.status) {
          this.approvalList = this.approvalList.concat(res.data);
          ++this.current;
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
  selectClick(type: string) {
    this.documentType = type;
  }
  goBack() {
    this.navController.navigateBack("/tabs/work");
  }
  openSlideMenu(e: any) {
    this.formData = Object.assign(this.formData, e);
    this.getList();
  }
}
