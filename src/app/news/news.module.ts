import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NewsPage } from "./news.page";
import { HeaderSelectModule } from "../module/header-select/header-select.module";
import { SearchComponent } from "./component/search/search.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderSelectModule,
    RouterModule.forChild([{ path: "", component: NewsPage }])
  ],
  declarations: [NewsPage, SearchComponent]
})
export class NewsPageModule {}
