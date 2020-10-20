import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'
import { PipeModuleModule } from '../pipe/pipeModule.module'
import { CustCreditListComponent } from './components/cust-credit-list/cust-credit-list.component'
import { FundApplyDetailComponent } from './components/fund-apply-detail/fund-apply-detail.component'
import { FundApplyPage } from './fund-apply.page'
import { from } from 'rxjs'
import { SearchComponent } from './components/cust-credit-list/search/search.component'
import { DetailListComponent } from './components/fund-apply-detail/detail-list/detail-list.component'
import { SearchInfoComponent } from './components/fund-apply-detail/search-info/search-info.component'
import { HeaderSelectModule } from '../module/header-select/header-select.module'
import { ChooseContractInfoComponent } from './components/choose-contract-info/choose-contract-info.component'
import { ContractSearchComponent } from './components/choose-contract-info/contract-search/contract-search.component'
import { ContractDetailListComponent } from './components/choose-contract-info/contract-detail-list/contract-detail-list.component'
import { ChooseClaimInfoComponent } from './components/choose-claim-info/choose-claim-info.component'
import { ClaimSearchComponent } from './components/choose-claim-info/claim-search/claim-search.component'
import { ClaimDetailListComponent } from './components/choose-claim-info/claim-detail-list/claim-detail-list.component'
const routes: Routes = [
  {
    path: '',
    component: FundApplyPage,
  },
  {
    path: 'cust-credit-list',
    component: CustCreditListComponent,
  },
  {
    path: 'fund-apply-detail',
    component: FundApplyDetailComponent,
  },
  {
    path: 'detail-list',
    component: DetailListComponent,
  },
  {
    path: 'choose-contract-info',
    component: ChooseContractInfoComponent,
  },
  {
    path: 'choose-claim-info',
    component: ChooseClaimInfoComponent,
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
    FundApplyPage,
    CustCreditListComponent,
    FundApplyDetailComponent,
    SearchComponent,
    ChooseClaimInfoComponent,
    DetailListComponent,
    ContractSearchComponent,
    ContractDetailListComponent,
    ClaimSearchComponent,
    ChooseContractInfoComponent,
    SearchInfoComponent,
    ClaimDetailListComponent,
  ],
  entryComponents: [
    CustCreditListComponent,
    FundApplyDetailComponent,
    SearchComponent,
    ClaimSearchComponent,
    ContractSearchComponent,
    ChooseClaimInfoComponent,
    DetailListComponent,
    ContractDetailListComponent,
    ChooseContractInfoComponent,
    SearchInfoComponent,
    ClaimDetailListComponent,
  ],
})
export class FundApplyPageModule {}
