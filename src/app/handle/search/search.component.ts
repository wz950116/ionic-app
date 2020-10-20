import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MenuController } from "@ionic/angular";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  
  public formData: any = {
    toDoDateStart: "",
    toDoDateEnd: ""
  };

  @Output() private search = new EventEmitter<string>();

  constructor(private menu: MenuController) {}

  ngOnInit() {}

  changeStartTime(e: any) {
    if (
      this.formData.toDoDateEnd &&
      new Date(e.detail.value) > new Date(this.formData.toDoDateEnd)
    ) {
      this.formData.toDoDateEnd = "";
    }
  }

  changeEndTime(e: any) {
    if (
      this.formData.toDoDateStart &&
      new Date(e.detail.value) < new Date(this.formData.toDoDateStart)
    ) {
      this.formData.toDoDateStart = "";
    }
  }

  dateFormate(date: any) {
    if (date) {
      const year = new Date(date).getFullYear() + "";
      const month =
        new Date(date).getMonth() + 1 > 9
          ? new Date(date).getMonth() + 1
          : "0" + (new Date(date).getMonth() + 1);
      const day =
        new Date(date).getDate() > 9
          ? new Date(date).getDate()
          : "0" + new Date(date).getDate();
      return year + month + day;
    }
  }

  // 重置
  screenReset() {
    this.formData.toDoDateStart = "";
    this.formData.toDoDateEnd = "";
  }

  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData);
    formData.toDoDateStart = this.dateFormate(formData.toDoDateStart) || "";
    formData.toDoDateEnd = this.dateFormate(formData.toDoDateEnd) || "";
    this.search.emit(formData);
    this.menu.toggle();
  }
}
