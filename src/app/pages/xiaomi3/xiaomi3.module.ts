import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Xiaomi3PageRoutingModule } from './xiaomi3-routing.module';

import { Xiaomi3Page } from './xiaomi3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Xiaomi3PageRoutingModule
  ],
  declarations: [Xiaomi3Page]
})
export class Xiaomi3PageModule {}
