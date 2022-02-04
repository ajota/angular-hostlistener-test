import { Component, ElementRef, HostListener, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  openText = "close text";
  app = "test";
  @Input() public visor;

  constructor(private elem: ElementRef) {
    // debugger;
    let apps = [{ name: "simular" }];

    this.elem.nativeElement.visor = this.eventHooks(apps);
  }

  eventHooks(apps) {
    let eventPrefix = "sc:visor:";
    let appsEvents = {};

    for (let i; i < apps.lenght; i++) {
      let app = apps[i];

      let open = new CustomEvent(`${eventPrefix}open`, { detail: app.name });
      let close = new CustomEvent(`${eventPrefix}close`, { detail: app.name });

      appsEvents[app.name] = {
        open: () => document.dispatchEvent(open),
        close: () => document.dispatchEvent(close)
      };
    }

    return appsEvents;
  }

  @HostListener(`document:sc:visor:open`, ["$event"])
  open({ detail }) {
    console.log(detail);
    this.openText = "Open text";
  }

  @HostListener("document:sc:visor:close", ["$event"])
  close({ detail }) {
    console.log(detail);
    this.openText = "Close text again";
  }
}
