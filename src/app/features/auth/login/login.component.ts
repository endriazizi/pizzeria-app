import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonicModule, FormsModule, NavbarComponent],
})
export class LoginComponent implements OnInit {
  constructor() {}

  username = '';
  password = '';

  login() {
    console.log('Login attempt', this.username, this.password);
  }

  ngOnInit() {}
}
