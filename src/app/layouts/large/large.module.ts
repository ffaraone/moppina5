import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LargePageRoutingModule } from './large-routing.module';

import { LargePage } from './large.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LargePageRoutingModule
  ],
  declarations: [LargePage]
})
export class LargePageModule {}
