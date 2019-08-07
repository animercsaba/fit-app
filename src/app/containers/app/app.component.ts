import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Store } from "store";
import { Router } from "@angular/router";
import {
  AuthService,
  User
} from "../../../auth/shared/services/auth/auth.service";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(["/auth/login"]);
  }
}
