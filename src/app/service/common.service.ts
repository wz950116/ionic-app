import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastController } from "@ionic/angular";
import CryptoJS from 'crypto-js'
import { JSEncrypt } from 'jsencrypt'; // aes加密
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: "root"
})
export class CommonService {

  public KEY:string = CryptoJS.enc.Utf8.parse('1234567890123456') // 默认的 KEY 必须为16
  
  constructor(public http: HttpClient, public toastController: ToastController) { }

  // RSA公钥加密
  rsaEncrypt(pupblicKey: string, data: any) {
    var jse = new JSEncrypt()
    jse.setPublicKey(pupblicKey)
    return jse.encrypt(data)
  }

  // 加密
  aesEncrypt(word: string, keyStr: string) {
    let key = this.KEY
    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
    }
    const srcs = CryptoJS.enc.Utf8.parse(word)
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  }

  // 解密
  aesDecrypt(word: string, keyStr: string) {
    let key = this.KEY
    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
    }
    const base64 = CryptoJS.enc.Base64.parse(word)
    const src = CryptoJS.enc.Base64.stringify(base64)
    const decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  }

  get(url: string, query: any) {
    const domain = "";
    const headers = new HttpHeaders().set("token", "iloveangular");
    const params = new HttpParams(query);
    return new Promise((reslove, reject) => {
      this.http.get(domain + url, { headers, params }).subscribe(
        response => {
          reslove(response);
        },
        async error => {
          reject(error)
          const toast = await this.toastController.create({
            message: error.message,
            position: "top",
            duration: 2000,
            showCloseButton: true,
            closeButtonText: "关闭",
            color: "danger"
          });
          toast.present();
        }
      );
    });
  }

  async post(url: string, params: any) {
    // 生产随机密码 使用AES-128-EBC加密模式，需要为16位
    const random = CryptoJS.lib.WordArray.random(8).toString()
    const domain = url === "/captcha" ? environment.domain : environment.domain + "/api";

    const Authorization = !!sessionStorage.getItem("TokenKey")

    let headers: any = new HttpHeaders({
      "Content-type": "application/json; charset=UTF-8",
      "lang": "en",
      "module": sessionStorage.getItem('auditModule') || "",
      ...Authorization && {"Authorization": "Bearer " + sessionStorage.getItem("TokenKey")}
    })

    if (environment.ENCRYPT_ENABLE) {
      // 密码RSA加密
      if (params) {
        headers = headers
          .set("Content-type", "application/json; charset=UTF-8")
          .set("lang", "zh")
          .set("module", "")
          .set("secret", this.rsaEncrypt(environment.RSA_PUB_KEY, random))
        params = this.aesEncrypt(JSON.stringify(params), random)
      }
    } else if (params && params.isEncrypt) {
      // 个别加密
      headers = headers
        .set("Content-type", "application/json; charset=UTF-8")
        .set("lang", "zh")
        .set("module", "")
        .set("secret", this.rsaEncrypt(environment.RSA_PUB_KEY, random))
      params = this.aesEncrypt(JSON.stringify(params), random)
    }
    
    return new Promise((resolve, reject) => {
      this.http.post(domain + url, params, { headers }).subscribe(
        async (response: any) => {
          if (!response.status) {
            const toast = await this.toastController.create({
              message: response.msgText,
              position: "top",
              duration: 2000,
              showCloseButton: false,
              closeButtonText: "关闭",
              color: "danger"
            });
            toast.present();
          }
          // 是否进行解密处理
          if (response.encryptData && random) {
            const decryptData = this.aesDecrypt(response.encryptData, random)
            response.data = JSON.parse(decryptData)
          }
          resolve(response);
        },
        async error => {
          reject(error)
          const toast = await this.toastController.create({
            message: error.message,
            position: "top",
            duration: 2000,
            showCloseButton: false,
            closeButtonText: "关闭",
            color: "danger"
          });
          toast.present();
        }
      );
    });
  }

  postBlob(url: string, params: any) {
    const domain = environment.domain + "/api";
    const headers = new HttpHeaders()
      .set("Content-type", "application/json; charset=UTF-8")
      .set("Authorization", "Bearer " + sessionStorage.getItem("TokenKey"));
    
    return new Promise((reslove, reject) => {
      this.http.post(domain + url, params, { headers, responseType: 'blob' }).subscribe(
        async (response: any) => {
          reslove(response);
        },
        async error => {
          reject(error)
          const toast = await this.toastController.create({
            message: error.message,
            position: "top",
            duration: 2000,
            showCloseButton: false,
            closeButtonText: "关闭",
            color: "danger"
          });
          toast.present();
        }
      );
    });
  }
}
