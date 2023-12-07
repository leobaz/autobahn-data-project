import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: ':highwayId/construction-sites',
    loadChildren: () =>
      import('./modules/highway-details//highway-details.module').then(
        (m) => m.HighwayDetailsModule
      ),
  },
];
