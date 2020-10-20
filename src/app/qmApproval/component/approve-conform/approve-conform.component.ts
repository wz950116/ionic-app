import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from "@ionic/angular";
import { CommonService } from "../../../service/common.service";

@Component({
  selector: 'app-approve-conform',
  templateUrl: './approve-conform.component.html',
  styleUrls: ['./approve-conform.component.scss'],
})
export class ApproveConformComponent implements OnInit {
  public data: any = {};
  public listData: any = [];

  constructor(public navController: NavController, public navParams: NavParams, public common: CommonService, public toastController: ToastController) {
    this.data = this.navParams.data.params;
  }

  ngOnInit() {
    this.common
      .post("/bpm/task/listNextUserTaskNodeInfo", {
        funcModule: this.data.businessName,
        funcOperation: '查询',
        data: {
          taskId: this.data.id
        }
      })
      .then(async (response: any) => {
        response.data.forEach((i: any) => {
          this.toGetListApproveUserListByGroup(i)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  // 获取员工信息
  toGetListApproveUserListByGroup(functionInfo: any) {
    this.common
      .post("/bpm/user/listUser", {
        funcModule: this.data.businessName,
        funcOperation: '查询',
        data: {
          memberOfGroup: functionInfo.candidateGroup
        }
      })
      .then(async (response: any) => {
        functionInfo.list = response.data
        if (functionInfo.takeMode === '1') this.listData.push(functionInfo)
        console.log(this.listData)
      })
      .catch(err => {
        console.log(err);
      });
  }

  // 保存
  onSave() {
    let selectFlg = true
    const completeGeneralAuditObj = {
      taskId: this.data.id, // 任务ID
      auditOption: this.data.opinion, // 审核意见
      auditResult: 1, // 审核结果
      auditType: 0, // 审核类型  0 一般审核 1 协助审核
      bpmVariableParamList: [] // 下一环节审批人变量值
    }
    this.listData.forEach(async (i: any) => {
      var str = i.assigneeFormVar
      var strOne = str.split('#{')[1]
      var strTwo = strOne.match(/(\S*)}/)[1]
      const item = {
        name: strTwo, // 变量名称
        value: i.account // 变量值
      }
      if (i.account === undefined) {
        const toast = await this.toastController.create({
          message: '请选择下一环节审批人',
          position: 'top',
          duration: 2000,
          showCloseButton: false,
          closeButtonText: "关闭",
          color: "danger"
        });
        toast.present();
        selectFlg = false
      }
      completeGeneralAuditObj.bpmVariableParamList.push(item)
    })
    if (selectFlg) {
      this.common
        .post("/bpm/backlog/businessCompletionBacklog", {
          funcModule: this.data.businessName,
          funcOperation: '发送',
          data: completeGeneralAuditObj
        })
        .then(async (response: any) => {
          const toast = await this.toastController.create({
            message: response.status ? '审核成功' : response.msgText,
            position: 'top',
            duration: 2000,
            showCloseButton: false,
            closeButtonText: "关闭",
            color: response.status ? "success" : "danger"
          });
          toast.present();
          this.doClose()
          if (response.status) this.navController.navigateForward("completed");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss();
  }
}
