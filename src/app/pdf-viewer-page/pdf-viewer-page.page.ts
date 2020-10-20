import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pdf-viewer-page',
  templateUrl: './pdf-viewer-page.page.html',
  styleUrls: ['./pdf-viewer-page.page.scss'],
})
export class PdfViewerPagePage implements OnInit {

  attachment: any = {
    title: '',
    url: ''
  };

 ionViewDidLoad() {
    this.attachment = this.navParams.data.attachment;
  }

  constructor(public navParams: NavParams) { }

  ngOnInit() {
  }

  //关闭模态对话框
  doClose() {
    this.navParams.data.modal.dismiss();
  }

}
