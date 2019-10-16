import { Component, OnInit } from "@angular/core";
import { NGXLogger } from "ngx-logger";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private logger: NGXLogger) {}

  public ngOnInit(): void {
    this.logger.debug("debug!");
    this.logger.error("error message");
  }
}
