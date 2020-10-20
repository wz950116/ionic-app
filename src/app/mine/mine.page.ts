import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { CommonService } from "../service/common.service";

@Component({
  selector: "app-mine",
  templateUrl: "./mine.page.html",
  styleUrls: ["./mine.page.scss"]
})
export class MinePage implements OnInit {
  public userList: any = {};
  constructor(
    public common: CommonService,
    public alertController: AlertController,
    public navController: NavController
  ) {}

  ngOnInit() {
    this.common
      .post("/user", {
        data: "0",
        funcModule: "登录",
        funcOperation: "查询"
      })
      .then((res: any) => {
        this.userList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: "",
      message: "确认退出登出？",
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {}
        },
        {
          text: "确认",
          handler: () => {
            sessionStorage.clear();
            this.navController.navigateBack("login");
          }
        }
      ]
    });

    await alert.present();
  }

  editInfo() {
    this.navController.navigateBack("personal-info");
  }
}
