import { Injectable } from "@angular/core";

import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  createUser(email: string, pw: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, pw);
  }

  loginUser(email: string, pw: string) {
    return this.af.auth.signInWithEmailAndPassword(email, pw);
  }
}
