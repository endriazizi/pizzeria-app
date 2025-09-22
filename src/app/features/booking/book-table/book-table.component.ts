import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
@Component({
  selector: 'app-book-table',
  imports: [IonicModule, RouterModule, NavbarComponent],
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
})
export class BookTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
