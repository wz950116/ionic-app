import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { HandlePage } from "./handle.page";
import { HeaderSelectModule } from "../module/header-select/header-select.module";
import { CartcontentModule } from "../module/cartcontent/cartcontent.module";
import { SearchComponent } from "./search/search.component";
const routes: Routes = [
  {
    path: "",
    component: HandlePage
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
  declarations: [HandlePage, SearchComponent]
})
export class HandlePageModule {}
