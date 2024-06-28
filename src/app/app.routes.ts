import { Routes } from '@angular/router';
import { AppUrl } from './core/const/route-enums';

export const routes: Routes = [
  { path: '', redirectTo: `/${AppUrl.FORM}`, pathMatch: 'full' },
  {
    path: `${AppUrl.FORM}`,
    loadComponent: () =>
      import('./views/forms-pg/forms-pg.component').then(
        (m) => m.FormsPgComponent
      ),
  },
];
