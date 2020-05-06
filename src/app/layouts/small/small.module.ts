import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallPageRoutingModule } from './small-routing.module';

import { SmallPage } from './small.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallPageRoutingModule
  ],
  declarations: [SmallPage]
})
export class SmallPageModule {}
