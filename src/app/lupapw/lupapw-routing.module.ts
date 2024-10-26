import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LupapwPage } from './lupapw.page';

const routes: Routes = [
  {
    path: '',
    component: LupapwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LupapwPageRoutingModule {}
