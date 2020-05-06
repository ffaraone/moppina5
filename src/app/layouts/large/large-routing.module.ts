import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LargePage } from './large.page';

const routes: Routes = [
  {
    path: '',
    component: LargePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LargePageRoutingModule {}
