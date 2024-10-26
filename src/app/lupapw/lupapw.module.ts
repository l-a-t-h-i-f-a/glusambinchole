import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LupapwPageRoutingModule } from './lupapw-routing.module';

import { LupapwPage } from './lupapw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LupapwPageRoutingModule
  ],
  declarations: [LupapwPage]
})
export class LupapwPageModule {}
