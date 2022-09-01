import { Injectable, OnDestroy, NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { init } from "commandbar";

init("c317b8e7");

@Injectable({
  providedIn: "root",
})
export class CommandbarService implements OnDestroy {
  constructor(private router: Router, private ngZone: NgZone) {
    window.CommandBar.boot("me");
    console.log("me");
  }

  addRouter(): void {
    window.CommandBar.addRouter((url) => {
      this.ngZone.run(() => {
        this.router.navigateByUrl(url);
      });
    });
  }

  setup(): void {
    this.addRouter();
  }

  ngOnDestroy(): void {
    window.CommandBar.shutdown();
  }
}
