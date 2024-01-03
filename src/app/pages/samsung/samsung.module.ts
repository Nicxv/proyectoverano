import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamsungPageRoutingModule } from './samsung-routing.module';

import { SamsungPage } from './samsung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamsungPageRoutingModule
  ],
  declarations: [SamsungPage]
})
export class SamsungPageModule {}
