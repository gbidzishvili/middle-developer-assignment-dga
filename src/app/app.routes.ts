import { Routes } from '@angular/router';
import { AppUrlEnum } from './core/const/route-enums';

export const routes: Routes = [
  { path: '', redirectTo: `/${AppUrlEnum.FORM}`, pathMatch: 'full' },
  {
    path: `${AppUrlEnum.FORM}`,
    loadComponent: () =>
      import('./views/forms-pg/forms-pg.component').then(
        (m) => m.FormsPgComponent
      ),
  },
  {
    path: `${AppUrlEnum.PIPE}`,
    loadComponent: () =>
      import('./views/pipe-pg/pipe-pg.component').then(
        (m) => m.PipePgComponent
      ),
  },
  {
    path: `${AppUrlEnum.CalendarView}`,
    loadComponent: () =>
      import('./views/calendar-pg/calendar-pg.component').then(
        (m) => m.CalendarPgComponent
      ),
  },
  {
    path: `${AppUrlEnum.STRINGCOMPARISON}`,
    loadComponent: () =>
      import(
        './views/string-comparison-pg/string-comparison-pg.component'
      ).then((m) => m.StringComparisonPgComponent),
  },
  { path: '**', pathMatch: 'full', redirectTo: `/${AppUrlEnum.FORM}` },
];
