import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iphone2PageRoutingModule } from './iphone2-routing.module';

import { Iphone2Page } from './iphone2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iphone2PageRoutingModule
  ],
  declarations: [Iphone2Page]
})
export class Iphone2PageModule {}
