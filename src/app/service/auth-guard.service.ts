import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Base64 } from 'js-base64';
import { AppConfig } from '../app.config';
import { CommonService } from './common.service';
import { LoadingController } from '@ionic/angular';

function isExpired() {
  const token = sessionStorage.getItem('TokenKey') || '';
  if (token.length < 1) {
    return false;
  }

  const str = token.split('.')[1];
  const user = JSON.parse(Base64.decode(str));
  if (user && user.exp) {
    const date = new Date(0);
    date.setUTCSeconds(user.exp);
    if (date > new Date()) {
      return true;
    }
  }
  return false;
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  public onOff = true;
  constructor(
    public navController: NavController,
    public common: CommonService,
    public loadingController: LoadingController
  ) { }
  async canActivate(): Promise<boolean> {
    const loading = await this.loadingController.create({
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();

    // 登录状态
    AppConfig.loginState = isExpired();
    // 字典码表
    if (AppConfig.dataDict.length === 0 && AppConfig.loginState && this.onOff) {
      this.onOff = false;
      const result: any = await this.common
        .post('/sys/dict/json', {
          data: {
            dictType: '',
            lang: 'zh'
          },
          funcModule: 'init',
          funcOperation: 'json'
        });
      if (result.status) {
        this.onOff = true;
        AppConfig.dataDict = result.data;
      }
    }
    if (!AppConfig.loginState) {
      sessionStorage.clear();
      this.navController.navigateForward('login');
    }
    this.loadingController.dismiss();
    return AppConfig.loginState;
  }
}
