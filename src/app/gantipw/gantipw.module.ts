import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GantipwPageRoutingModule } from './gantipw-routing.module';

import { GantipwPage } from './gantipw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GantipwPageRoutingModule
  ],
  declarations: [GantipwPage]
})
export class GantipwPageModule {}
