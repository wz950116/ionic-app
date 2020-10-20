import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { JPush } from '@jiguang-ionic/jpush/ngx';

import { HotCodePush } from '@ionic-native/hot-code-push/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonService } from './service/common.service';
import { IonicStorageModule } from '@ionic/storage';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerPagePage } from './pdf-viewer-page/pdf-viewer-page.page';
import { PipeModuleModule } from './pipe/pipeModule.module'

import '../assets/js/rem.js';
import '../theme/px2rem.scss';

@NgModule({
  declarations: [AppComponent, PdfViewerPagePage],
  entryComponents: [PdfViewerPagePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios' // 统一用ios风格样式
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,
    PipeModuleModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CommonService,
    JPush,
    HotCodePush,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
