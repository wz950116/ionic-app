import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage {
  @ViewChild("tabs") tabs: any;

  public activeTab: any = "worker";
  public approvalCount: any = 0;

  ngOnInit() {
    this.approvalCount = sessionStorage.getItem("approvalCount");
  }

  ngDoCheck() {
    this.approvalCount = sessionStorage.getItem("approvalCount");
  }

  tabsDidChange() {
    this.activeTab = this.tabs.getSelected();
    if (this.activeTab === "worker") {
      this.approvalCount = sessionStorage.getItem("approvalCount");
    }
  }
}
