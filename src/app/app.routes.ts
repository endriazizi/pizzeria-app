import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
  {
    path: 'prenota-tavolo',
    loadComponent: () =>
      import('./features/booking/book-table/book-table.component').then(
        (m) => m.BookTableComponent
      ),
  },
  {
    path: 'ordinazioni',
    loadComponent: () =>
      import('./features/booking/order-menu/order-menu.component').then(
        (m) => m.OrderMenuComponent
      ),
  },
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./features/login/login.component').then((m) => m.LoginComponent),
  // },
  { path: '**', redirectTo: '' }, // fallback
];
