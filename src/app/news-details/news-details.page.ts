import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.page.html",
  styleUrls: ["./news-details.page.scss"]
})
export class NewsDetailsPage implements OnInit {
  constructor(public route: ActivatedRoute) {}
  public news: any = {};
  public dateTime: any = "";
  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.news = data;
    });
    this.dateTime = new Date();
  }
}
