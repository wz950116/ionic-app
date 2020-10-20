import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { LoginGuard } from './service/auth-guard.service'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
  },
  {
    path: 'pwd-edit',
    loadChildren:
      './mine/components/pwd-edit/pwd-edit.module#PwdEditPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'personal-info',
    loadChildren:
      './mine/components/personal-info/personal-info.module#PersonalInfoPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'qmApproval',
    loadChildren: './qmApproval/qmApproval.module#QmApprovalPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'startup',
    loadChildren: './startup/startup.module#StartupPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'completed',
    loadChildren: './completed/completed.module#CompletedPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'handle',
    loadChildren: './handle/handle.module#HandlePageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'news-details',
    loadChildren: './news-details/news-details.module#NewsDetailsPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'storage-notice',
    loadChildren:
      './storage-notice/storage-notice.module#StorageNoticePageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'invoice-registration',
    loadChildren:
      './invoice-registration/invoice-registration.module#InvoiceRegistrationPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'price-registration',
    loadChildren:
      './price-registration/price-registration.module#PriceRegistrationPageModule',
  },
  {
    path: 'document',
    loadChildren: './document/document.module#DocumentPageModule',
    canActivate: [LoginGuard],
  },
  {
    path: 'fund-apply',
    loadChildren: './fund-apply/fund-apply.module#FundApplyPageModule',
  },

  {
    path: '**',
    redirectTo: '/tabs/worker',
    pathMatch: 'full',
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
