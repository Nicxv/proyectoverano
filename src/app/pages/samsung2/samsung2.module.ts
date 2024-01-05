import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Samsung2PageRoutingModule } from './samsung2-routing.module';

import { Samsung2Page } from './samsung2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Samsung2PageRoutingModule
  ],
  declarations: [Samsung2Page]
})
export class Samsung2PageModule {}
