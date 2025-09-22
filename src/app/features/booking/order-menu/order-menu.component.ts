import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
@Component({
  selector: 'app-order-menu',
  imports: [IonicModule, RouterModule, NavbarComponent],
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss'],
})
export class OrderMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
