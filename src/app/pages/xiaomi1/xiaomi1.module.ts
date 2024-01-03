import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Xiaomi1PageRoutingModule } from './xiaomi1-routing.module';

import { Xiaomi1Page } from './xiaomi1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Xiaomi1PageRoutingModule
  ],
  declarations: [Xiaomi1Page]
})
export class Xiaomi1PageModule {}
