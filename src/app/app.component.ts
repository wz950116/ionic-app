import { Component } from '@angular/core';
import { JPush } from '@jiguang-ionic/jpush/ngx';
import { HotCodePush } from '@ionic-native/hot-code-push/ngx';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(jpush: JPush,
    hotCodePush: HotCodePush,
    public toastController: ToastController,
    public alertController: AlertController) {
    if ('_cordovaNative' in window) {
      jpush.init();
      jpush.setDebugMode(true);
      hotCodePush.fetchUpdate().then(data => {
        hotCodePush.isUpdateAvailableForInstallation().then(
          async () => {
            const alert = await this.alertController.create({
              message: '检测到数据更新，是否更新',
              buttons: [
                {
                  text: '取消',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (blah) => {
                    console.log('Confirm Cancel: blah');
                  }
                }, {
                  text: '更新',
                  handler: () => {
                    console.log('Confirm Okay');
                    hotCodePush.installUpdate().then(() => {
                      console.log('Update installed!');
                    }
                    ).catch(error => {
                      console.log('Failed to install the update with error code: ' + error.code);
                      console.log(error.description);
                    });
                  }
                }
              ]
            });

            await alert.present();
          });
      }).catch(error => {
        console.log('--fetchUpdate error--', error.code, error.description);
      });

      document.addEventListener(
        'chcp_updateInstalled',
        async (event: any) => {
          const toast = await this.toastController.create({
            message: '更新成功',
            position: 'top',
            duration: 4000,
            showCloseButton: false,
            color: 'success'
          });
          toast.present();
        },
        false
      );

      document.addEventListener(
        'jpush.receiveNotification',
        async (event: any) => {
          if (event) {
            // alert('Receive notification: ' + JSON.stringify(event));
            const toast = await this.toastController.create({
              message: event.title + ':' + event.alert,
              position: 'top',
              duration: 4000,
              showCloseButton: false,
              color: 'primary'
            });
            toast.present();
          }
        },
        false
      );
      document.addEventListener(
        'jpush.openNotification',
        (event: any) => {
        },
        false
      );
    }
  }
}
