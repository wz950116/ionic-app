import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginGuard } from '../service/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'worker',
        children: [
          {
            path: '',
            loadChildren: '../worker/worker.module#WorkerPageModule'
          }
        ],
        canActivate: [LoginGuard]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ],
        canActivate: [LoginGuard]
      },
      {
        path: 'warning',
        children: [
          {
            path: '',
            loadChildren: '../warning/warning.module#WarningPageModule'
          }
        ],
        canActivate: [LoginGuard]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: '../report/report.module#ReportPageModule'
          }
        ],
        canActivate: [LoginGuard]
      },
      {
        path: 'mine',
        children: [
          {
            path: '',
            loadChildren: '../mine/mine.module#MinePageModule'
          },
          {
            path: '/personal-info',
            loadChildren: '../mine/components/personal-info/personal-info.module#PersonalInfoPageModule'
          }
        ],
        canActivate: [LoginGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/worker',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
