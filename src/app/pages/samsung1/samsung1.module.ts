import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Samsung1PageRoutingModule } from './samsung1-routing.module';

import { Samsung1Page } from './samsung1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Samsung1PageRoutingModule
  ],
  declarations: [Samsung1Page]
})
export class Samsung1PageModule {}
