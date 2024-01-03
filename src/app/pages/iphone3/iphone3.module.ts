import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iphone3PageRoutingModule } from './iphone3-routing.module';

import { Iphone3Page } from './iphone3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Iphone3PageRoutingModule
  ],
  declarations: [Iphone3Page]
})
export class Iphone3PageModule {}
