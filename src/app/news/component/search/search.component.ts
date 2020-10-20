import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AppConfig } from "../../../app.config";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  public msgClassType: any[] = AppConfig.dataDict.msgClassType;
  public isSelect = "";
  public formData: any = {
    sendDateFrom: "",
    sendDateTo: "",
    msgClassType: "",
    msgTitle: ""
  };

  @Output() private search = new EventEmitter<string>();

  constructor(private menu: MenuController) {}

  ngOnInit() {}
  spanClick(e) {
    this.isSelect = e;
    this.formData.msgClassType = e;
  }
  changeStartTime(e: any) {
    if (
      this.formData.sendDateTo &&
      new Date(e.detail.value) > new Date(this.formData.sendDateTo)
    ) {
      this.formData.sendDateTo = "";
    }
  }

  changeEndTime(e: any) {
    if (
      this.formData.sendDateFrom &&
      new Date(e.detail.value) < new Date(this.formData.sendDateFrom)
    ) {
      this.formData.sendDateFrom = "";
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
    this.formData.sendDateFrom = "";
    this.formData.sendDateTo = "";
    this.formData.msgClassType = "";
    this.formData.msgTitle = "";
    this.isSelect = "";
  }
  // 确定
  screenConfirm() {
    let formData = Object.assign({}, this.formData);
    formData.sendDateFrom = this.dateFormate(formData.sendDateFrom) || "";
    formData.sendDateTo = this.dateFormate(formData.sendDateTo) || "";
    this.search.emit(formData);
    this.menu.toggle();
  }
}
