import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.page.html",
  styleUrls: ["./personal-info.page.scss"]
})
export class PersonalInfoPage implements OnInit {
  public users: any = {};
  constructor(public route: ActivatedRoute, public navController: NavController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
      this.users = data;
    });
  }
}
