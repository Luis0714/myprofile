import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '',
    redirectTo: 'home/inicio',
    pathMatch: 'full'
  }
];
