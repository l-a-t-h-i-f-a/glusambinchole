import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KebijakanPage } from './kebijakan.page';

const routes: Routes = [
  {
    path: '',
    component: KebijakanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KebijakanPageRoutingModule {}
