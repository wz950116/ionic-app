import { Component, OnInit, Input } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { CommonService } from "../../service/common.service";

@Component({
  selector: "app-cartcontent",
  templateUrl: "./cartcontent.component.html",
  styleUrls: ["./cartcontent.component.scss"]
})
export class CartcontentComponent implements OnInit {
  constructor(public navController: NavController, public common: CommonService, public toastController: ToastController) {}
  @Input() btntext: string;
  @Input() btncolor: string;
  @Input() documentType: string;
  @Input() approvalList: any[];
  ngOnInit() {
    if (this.btntext === "处理") {
      this.btncolor = "myDanger";
    } else {
      this.btncolor = "myPrimary";
    }
  }
  setColor(i: string) {
    if (i && i[0]) {
      switch (i[0]) {
        case '采':
        case '发':
        case '定':
          return "myWarning";
        case '销':
          return 'myPrimary';
        case '入':
          return 'myPrimary';
        case '出':
        case '付':
          return 'mySecondary';
        case '收':
          return "myTertiary";
      }
    }
  }
  approvaldetail(data: any) {
    console.log(data, 0)
    if (data.taskStatusType === '1') {
      this.common
        .post('/bpm/task/claimTask', {
          funcModule: data.businessName,
          funcOperation: '认领',
          data: {
            assignee: '', // 当前账号
            taskId: data.id // 任务ID
          }
        })
        .then(async (response: any) => {
          const toast = await this.toastController.create({
            message: response.status ? "认领任务成功" : response.msgText,
            position: 'top',
            duration: 2000,
            showCloseButton: false,
            closeButtonText: "关闭",
            color: response.status ? "success" : "danger"
          });
          toast.present();
          if (response.status) this.navController.navigateForward(["qmApproval"], { queryParams: data });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      data.opType = this.btntext === "查看" ? 'view' : 'edit'
      this.navController.navigateForward(["qmApproval"], { queryParams: data });
    }
  }
}
