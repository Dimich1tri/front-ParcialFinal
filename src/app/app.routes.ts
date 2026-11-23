import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Bodegas y Productos',
    loadComponent: () =>
      import('./bodegas/bodega-list/bodega-list.component').then(m => m.BodegaListComponent)
  },
  { path: '**', redirectTo: '' }
];
