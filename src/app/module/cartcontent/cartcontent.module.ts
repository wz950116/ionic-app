import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { CartcontentComponent } from './cartcontent.component'

@NgModule({
  declarations: [CartcontentComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [CartcontentComponent]
})
export class CartcontentModule {}
