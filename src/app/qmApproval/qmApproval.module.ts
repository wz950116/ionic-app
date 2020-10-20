import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { QmApprovalPage } from './qmApproval.page'

import { MatButtonModule, MatStepperModule } from '@angular/material'

import { PipeModuleModule } from '../pipe/pipeModule.module'

// import {
//   DataDictFormatePipe,
//   DateFormatePipe,
//   NumFormatePipe
// } from '../pipe/dataDictFormate.pipe'

import { TableDetailComponent } from './component/table-detail/table-detail.component'
import { AssistConformComponent } from './component/assist-conform/assist-conform.component'
import { RefuseConformComponent } from './component/refuse-conform/refuse-conform.component'
import { ApproveConformComponent } from './component/approve-conform/approve-conform.component'

const routes: Routes = [
  {
    path: '',
    component: QmApprovalPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatStepperModule,
    PipeModuleModule
  ],
  declarations: [
    QmApprovalPage,
    // DataDictFormatePipe,
    // DateFormatePipe,
    // NumFormatePipe,
    TableDetailComponent,
    AssistConformComponent,
    ApproveConformComponent,
    RefuseConformComponent
  ],
  entryComponents: [
    TableDetailComponent,
    AssistConformComponent,
    ApproveConformComponent,
    RefuseConformComponent
  ]
})
export class QmApprovalPageModule {}
