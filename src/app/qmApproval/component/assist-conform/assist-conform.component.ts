import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, ToastController } from "@ionic/angular";
import { CommonService } from "../../../service/common.service";

@Component({
  selector: "app-assist-conform",
  templateUrl: "./assist-conform.component.html",
  styleUrls: ["./assist-conform.component.scss"]
})
export class AssistConformComponent implements OnInit {
  public data: any = {};
  public listData: any = [];
  public formData: any = {
    assistant: "",
    assistMsg: ""
  };

  constructor(public navController: NavController, public navParams: NavParams, public common: CommonService, public toastController: ToastController) {
    this.data = this.navParams.data.params;
  }

  ngOnInit() {
    this.common
      .post("/dd/selectData/list", {
        data: {
          type: "FUNC_EMPLOYEE"
        }
      })
      .then(async (response: any) => {
        this.listData = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  // 保存
  onSave() {
    const accountName = this.listData.filter((v: any) => v.code === this.formData.assistant)[0].name;
    this.common
      .post("/bpm/backlog/sendAssistAudit", {
        funcModule: this.data.businessName,
        funcOperation: '协助审核',
        data: [{
          taskId: this.data.id, // 任务ID
          account: this.formData.assistant, // 协助人账号
          accountName, // 协助人名称
          assistMsg: this.formData.assistMsg // 协助信息
        }]
      })
      .then(async (response: any) => {
        const toast = await this.toastController.create({
          message: response.status ? '发送协助审核成功' : response.msgText,
          position: 'top',
          duration: 2000,
          showCloseButton: false,
          closeButtonText: "关闭",
          color: response.status ? "success" : "danger"
        });
        toast.present();
        this.doClose();
        if (response.status) this.navController.navigateForward("handle");
      })
      .catch(err => {
        console.log(err);
      });
  }

  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss();
  }
}
