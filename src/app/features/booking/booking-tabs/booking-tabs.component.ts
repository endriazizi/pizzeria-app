import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-booking-tabs',
  imports: [IonicModule, RouterModule],
  templateUrl: './booking-tabs.component.html',
  styleUrls: ['./booking-tabs.component.scss'],
})
export class BookingTabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
