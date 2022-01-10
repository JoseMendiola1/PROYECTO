import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full'
  },
  {
    path: 'comedia',
    loadChildren: () => import('./pages/comedia/comedia.module').then( m => m.ComediaPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./pages/terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'romance',
    loadChildren: () => import('./pages/romance/romance.module').then( m => m.RomancePageModule)
  },
  {
    path: 'ciencia',
    loadChildren: () => import('./pages/ciencia/ciencia.module').then( m => m.CienciaPageModule)
  },
  {
    path: 'musical',
    loadChildren: () => import('./pages/musical/musical.module').then( m => m.MusicalPageModule)
  },
  {
    path: 'fantasia',
    loadChildren: () => import('./pages/fantasia/fantasia.module').then( m => m.FantasiaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
