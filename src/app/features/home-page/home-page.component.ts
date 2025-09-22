import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
@Component({
  selector: 'app-home-page',
  // imports: [IonicModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [IonicModule, NavbarComponent],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
