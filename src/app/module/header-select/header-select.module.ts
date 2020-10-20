import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderSelectComponent } from './header-select.component'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [HeaderSelectComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [HeaderSelectComponent]
})
export class HeaderSelectModule {}
