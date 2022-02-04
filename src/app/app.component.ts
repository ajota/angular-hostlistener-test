import { Component, ElementRef, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  openText = "close text";
  app = "test";

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.visor = this.eventHooks();
  }

  eventHooks() {
    let eventPrefix = "sc:visor:";
    let open = new CustomEvent(`${eventPrefix}open`);
    let close = new CustomEvent(`${eventPrefix}close`);
    return {
      open: () => document.dispatchEvent(open),
      close: () => document.dispatchEvent(close)
    };
  }

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
