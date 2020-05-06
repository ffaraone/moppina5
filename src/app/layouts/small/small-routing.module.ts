
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmallPage } from './small.page';

const routes: Routes = [
  {
    path: '',
    component: SmallPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../pages/small/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../../pages/small/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../../pages/small/library/library.module').then(m => m.LibraryPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/small/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmallPageRoutingModule {}
