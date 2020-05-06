import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'small',
    pathMatch: 'full'
  },
  {
    path: 'small',
    loadChildren: () => import('./layouts/small/small.module').then( m => m.SmallPageModule)
  },
  {
    path: 'large',
    loadChildren: () => import('./layouts/large/large.module').then( m => m.LargePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



