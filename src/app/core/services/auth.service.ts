import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(user: string, pass: string) {
    this.loggedIn = true; // esempio base
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
