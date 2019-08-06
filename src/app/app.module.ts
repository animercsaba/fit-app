import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { Store } from "store";

// feature modules
import { AuthModule } from "../auth/auth.module";

// containers
import { AppComponent } from "./containers/app/app.component";

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), AuthModule],
  declarations: [AppComponent],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 var firebaseConfig = {
    apiKey: "AIzaSyB1N-lRGfHE9wqDnI11XUPYlFzKYdeKIJQ",
    authDomain: "fit-app-b1468.firebaseapp.com",
    databaseURL: "https://fit-app-b1468.firebaseio.com",
    projectId: "fit-app-b1468",
    storageBucket: "fit-app-b1468.appspot.com",
    messagingSenderId: "718091504869",
    appId: "1:718091504869:web:d29a94e97348e110"
  };
 */
