import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { InvoiceRegistrationPage } from './invoice-registration.page'
import { AttachmentComponent } from './components/attachment/attachment.component'
import { SupplieComponent } from './components/supplie/supplie.component'
import { from } from 'rxjs'
const routes: Routes = [
  {
    path: '',
    component: InvoiceRegistrationPage
  },
  {
    path: 'supplier',
    component: SupplieComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    InvoiceRegistrationPage,
    AttachmentComponent,
    SupplieComponent
  ],
  entryComponents: [AttachmentComponent, SupplieComponent]
})
export class InvoiceRegistrationPageModule {}
