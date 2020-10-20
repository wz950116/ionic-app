import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PipeModuleModule } from '../pipe/pipeModule.module'

import { StorageNoticePage } from './storage-notice.page';
import { StorageSelectComponent } from './component/storage-select/storage-select.component';
import { SupplierSelectComponent } from './component/supplier-select/supplier-select.component';
import { PurchaseBatchSelectComponent } from './component/purchase-batch-select/purchase-batch-select.component';
import { HeaderSelectModule } from "../module/header-select/header-select.module";
import { SearchComponent } from "./component/purchase-batch-select/search/search.component";
import { AddCostComponent } from "./component/add-cost/add-cost.component";
import { SaveSuccessComponent } from "./component/save-success/save-success.component";
import { OperateSuccessComponent } from "./component/operate-success/operate-success.component";

const routes: Routes = [
  {
    path: '',
    component: StorageNoticePage
  },
  {
    path: 'storage-select',
    component: StorageSelectComponent
  },
  {
    path: 'supplier-select',
    component: SupplierSelectComponent
  },
  {
    path: 'purchase-batch-select',
    component: PurchaseBatchSelectComponent
  },
  {
    path: 'add-cost',
    component: AddCostComponent
  },
  {
    path: 'save-success',
    component: SaveSuccessComponent
  },
  {
    path: 'operate-success',
    component: OperateSuccessComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderSelectModule,
    PipeModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StorageNoticePage,
    StorageSelectComponent,
    SupplierSelectComponent,
    PurchaseBatchSelectComponent,
    SearchComponent,
    AddCostComponent,
    SaveSuccessComponent,
    OperateSuccessComponent
  ],
  entryComponents: [
    StorageSelectComponent,
    SupplierSelectComponent,
    PurchaseBatchSelectComponent,
    AddCostComponent,
    SaveSuccessComponent,
    OperateSuccessComponent
  ]
})
export class StorageNoticePageModule {}
