import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  openText = "close text";

  @HostListener("document:sc:visor:open")
  open() {
    this.openText = "open text";
  }

  @HostListener("document:sc:visor:close")
  close() {
    this.openText = "Close text again";
  }
}
