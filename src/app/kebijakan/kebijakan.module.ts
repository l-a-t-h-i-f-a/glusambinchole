import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KebijakanPageRoutingModule } from './kebijakan-routing.module';

import { KebijakanPage } from './kebijakan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KebijakanPageRoutingModule
  ],
  declarations: [KebijakanPage]
})
export class KebijakanPageModule {}
