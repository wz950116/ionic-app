import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../../service/common.service";
import md5 from "md5-js";
import CryptoJS from "crypto-js";
import { Base64 } from "js-base64";
import { ToastController } from "@ionic/angular";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-pwd-edit",
  templateUrl: "./pwd-edit.page.html",
  styleUrls: ["./pwd-edit.page.scss"]
})
export class PwdEditPage implements OnInit {
  public showPwd: any = false;
  public account: any = "";
  public oldPassword: any = "";
  public newPassword: any = "";
  public confirmPwd: any = "";
  public errorMsg: any = "";
  constructor(
    public common: CommonService,
    public toastController: ToastController,
    public navController: NavController
  ) {}

  ngOnInit() {}
  /**
   * AES加密 ：字符串 key   返回base64
   */
  aesEncrypt(word, keyStr) {
    const KEY = CryptoJS.enc.Utf8.parse("1234567890123456");
    let key = KEY;

    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr);
    }

    const srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  }
  getUpdatePasswordUrl() {
    const loginType = sessionStorage.getItem("loginType");
    if (loginType === "plat") {
      return "/platform/cfgManager/updatePasswordWithOld";
    } else if (loginType === "group") {
      return "/platform/cfgTenant/updatePasswordWithOld";
    } else {
      return "/func/user/updatePasswordWithOld";
    }
  }
  async presentToast(res: any) {
    const toast = await this.toastController.create({
      message: res,
      color: "dark",
      mode: "ios",
      duration: 2000
    });
    toast.present();
  }
  onBlur() {
    if (this.account.length <= 0) {
      this.errorMsg = "用户名不能为空！";
      this.presentToast(this.errorMsg);
      return false;
    } else if (
      this.newPassword.length <= 0 ||
      this.oldPassword.length <= 0 ||
      this.confirmPwd.length <= 0
    ) {
      this.errorMsg = "密码不能为空！";
      this.presentToast(this.errorMsg);
      return false;
    } else if (this.confirmPwd !== this.newPassword) {
      this.errorMsg = "新密码与确认密码不符，请重新输入";
      this.presentToast(this.errorMsg);
      this.newPassword = "";
      this.confirmPwd = "";
      return false;
    }
    this.errorMsg = "";
    return true;
  }
  commitChangePwd() {
    if (this.onBlur()) {
      // 加密的处理
      const random = CryptoJS.lib.WordArray.random(8).toString();
      const newPasswordO = this.aesEncrypt(this.newPassword, random);
      this.common
        .post(this.getUpdatePasswordUrl(), {
          data: {
            account: this.account,
            oldPassword: Base64.encode(md5(this.oldPassword)),
            newPassword: Base64.encode(md5(this.newPassword)),
            random: random,
            newPasswordO: newPasswordO
          }
        })
        .then((res: any) => {
          if (res.status) {
            let msg = "修改成功,请重新登录";
            this.presentToast(msg);
            sessionStorage.clear();
            this.navController.navigateBack("login");
          } else {
            this.presentToast(res.msgText);
          }
        })
        .catch(() => {});
    }
  }
}
