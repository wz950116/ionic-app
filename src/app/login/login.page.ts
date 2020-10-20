import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular'
import { NavController } from '@ionic/angular'
import { DomSanitizer } from '@angular/platform-browser'

import md5 from 'md5-js'
import { Base64 } from 'js-base64'
import { JPush } from '@jiguang-ionic/jpush/ngx'
import { CommonService } from '../service/common.service'
import { AppConfig } from '../app.config'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  account: any = localStorage.getItem('account') || 'jm1-ywjl'
  password: any = '123456'
  enterpriseName: any = localStorage.getItem('enterpriseName') || '启明集团'
  captcha: any = ''
  captchaSrc: any = ''
  captchaToken: any = ''
  showPwd = false
  registrationId: string
  devicePlatform: string
  sequence = 0
  tagResultHandler = function (result) {
    const sequence: number = result.sequence
    const tags: Array<string> = result.tags == null ? [] : result.tags
    // alert('Success!' + '\nSequence: ' + sequence + '\nTags: ' + tags.toString());
  }

  aliasResultHandler = function (result) {
    const sequence: number = result.sequence
    const alias: string = result.alias
    // alert('Success!' + '\nSequence: ' + sequence + '\nAlias: ' + alias);
  }

  errorHandler = function (err) {
    const sequence: number = err.sequence
    const code = err.code
    // alert('Error!' + '\nSequence: ' + sequence + '\nCode: ' + code);
  }
  constructor(
    public router: Router,
    public toastController: ToastController,
    public navController: NavController,
    public common: CommonService,
    public jpush: JPush,
    private sanitizer: DomSanitizer
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    const token = sessionStorage.getItem('TokenKey')
    if (token) {
      const str = token.split('.')[1]
      const user = JSON.parse(Base64.decode(str))
      if (user && user.exp) {
        const date = new Date(0)
        date.setUTCSeconds(user.exp)
        if (date > new Date()) {
          this.navController.navigateForward('tabs/worker')
        } else {
          this.loadCaptcha()
        }
      } else {
        this.loadCaptcha()
      }
    } else {
      this.loadCaptcha()
    }
  }

  loadCaptcha() {
    this.common
      .post('/captcha', {})
      .then(async (res: any) => {
        if (res.status) {
          this.captchaSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpeg;base64,' + res.data.img
          )
          this.captchaToken = res.data.token
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  setAlias(alias) {
    this.jpush
      .setAlias({ sequence: this.sequence++, alias: alias })
      .then(this.aliasResultHandler)
      .catch(this.errorHandler)
  }
  async login() {
    if (this.account.length <= 0) {
      const toast = await this.toastController.create({
        message: '用户名不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger'
      })
      toast.present()
    } else if (this.password.length <= 0) {
      const toast = await this.toastController.create({
        message: '密码不能为空',
        position: 'top',
        duration: 2000,
        showCloseButton: false,
        closeButtonText: '关闭',
        color: 'danger'
      })
      toast.present()
    } else {
      const { account, password } = this
      // 登录接口请求
      const result: any = await this.common.post('/user/login', {
        data: {
          account,
          password: Base64.encode(md5(password)),
          captcha: this.captcha,
          enterpriseName: this.enterpriseName,
          captchaToken: this.captchaToken,
          terminal: 'WAP'
        },
        funcModule: '登录页面',
        funcOperation: '登录'
      })
      if (result.status) {
        AppConfig.loginState = true
        sessionStorage.setItem('TokenKey', result.data.accessToken)
        sessionStorage.setItem('Md5Key', result.data.md5Token)
        sessionStorage.setItem('RefreshTokenKey', result.data.refreshToken)
        localStorage.setItem('enterpriseName', this.enterpriseName)
        localStorage.setItem('account', this.account)
      } else {
        this.loadCaptcha()
        return false
      }
      // 多语言数据请求
      const result2: any = await this.common.post('/sys/dict/json', {
        data: {
          dictType: '',
          lang: 'zh'
        },
        funcModule: 'init',
        funcOperation: 'json'
      })

      if (!result2.status) {
        return
      }
      AppConfig.dataDict = result2.data
      if ('_cordovaNative' in window) {
        const employee: any = await this.common.post('/func/employee/info', {
          data: 'info',
          funcModule: '登录页面',
          funcOperation: '查询'
        })

        if (employee.status) {
          this.setAlias(employee.data.code)
        }
      }

      this.navController.navigateRoot('tabs/worker')
    }
  }
}
