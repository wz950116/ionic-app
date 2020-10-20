import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportPage } from './report.page';
import { IframeComponent } from './component/iframe/iframe.component';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  },
  {
    path: 'iframe',
    component: IframeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportPage, IframeComponent],
  entryComponents: [IframeComponent]
})
export class ReportPageModule {}
