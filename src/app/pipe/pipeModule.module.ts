import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDictFormatePipe, DateFormatePipe, NumFormatePipe } from '../pipe/dataDictFormate.pipe';
 
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DataDictFormatePipe,
    DateFormatePipe,
    NumFormatePipe
  ],
  declarations: [
    DataDictFormatePipe,
    DateFormatePipe,
    NumFormatePipe
  ]
})
export class PipeModuleModule {
  static forRoot() {
    return {
      ngModule: PipeModuleModule,
      providers: [],
    };
  }
}