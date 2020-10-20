import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'
import { PipeModuleModule } from '../pipe/pipeModule.module'

import { PriceRegistrationPage } from './price-registration.page'
import { PriceBatchComponent } from './component/price-batch/price-batch.component'
import { PriceBatchDetailComponent } from './component/price-batch-detail/price-batch-detail.component'
import { HeaderSelectModule } from '../module/header-select/header-select.module'
import { SearchComponent } from './component/price-batch/search/search.component'

import { from } from 'rxjs'

const routes: Routes = [
  {
    path: '',
    component: PriceRegistrationPage,
  },
  {
    path: 'price-batch',
    component: PriceBatchComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModuleModule,
    HeaderSelectModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PriceRegistrationPage,
    PriceBatchComponent,
    SearchComponent,
    PriceBatchDetailComponent,
  ],
  entryComponents: [
    PriceBatchComponent,
    PriceBatchDetailComponent,
    SearchComponent,
  ],
})
export class PriceRegistrationPageModule {}
