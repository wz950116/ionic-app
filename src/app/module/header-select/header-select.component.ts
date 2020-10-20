import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MenuController } from "@ionic/angular";
@Component({
  selector: "app-header-select",
  templateUrl: "./header-select.component.html",
  styleUrls: ["./header-select.component.scss"]
})
export class HeaderSelectComponent implements OnInit {
  @Input() documentTypeList: any[];
  @Output() private outer = new EventEmitter<string>();
  constructor(private menu: MenuController) {}
  public selectName: string = "全部";
  public dropShow: any = false;

  ngOnInit() {}
  selectClick(e: any) {
    this.selectName = e.target.innerText;
    this.outer.emit(this.selectName);
  }
  openSlideMenu() {
    this.menu.open("mine");
  }
}
