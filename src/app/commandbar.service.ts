import { Injectable, OnDestroy } from "@angular/core";
import { init } from "commandbar";

init("c317b8e7");

@Injectable({
  providedIn: "root",
})
export class CommandbarService implements OnDestroy {
  constructor() {
    const userID = "12345";
    window.CommandBar.boot(userID);
  }

  ngOnDestroy(): void {
    window.CommandBar.shutdown();
  }
}
