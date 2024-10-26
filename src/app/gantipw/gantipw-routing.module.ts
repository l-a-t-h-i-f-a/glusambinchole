import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GantipwPage } from './gantipw.page';

const routes: Routes = [
  {
    path: '',
    component: GantipwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GantipwPageRoutingModule {}
