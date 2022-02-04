import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  openText = "close text";
  app = "test";

  @HostListener(`document:sc:visor:open`, ["$event"])
  open(event) {
    console.log(event.detail);
    this.openText = "open text";
  }

  @HostListener("document:sc:visor:close", ["$event"])
  close() {
    this.openText = "Close text again";
  }
}
