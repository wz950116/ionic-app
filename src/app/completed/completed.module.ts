import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CompletedPage } from "./completed.page";
import { HeaderSelectModule } from "../module/header-select/header-select.module";
import { CartcontentModule } from "../module/cartcontent/cartcontent.module";
import { SearchComponent } from "./search/search.component";

const routes: Routes = [
  {
    path: "",
    component: CompletedPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderSelectModule,
    CartcontentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompletedPage, SearchComponent]
})
export class CompletedPageModule {}
