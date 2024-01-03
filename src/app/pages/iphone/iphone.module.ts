import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IphonePageRoutingModule } from './iphone-routing.module';

import { IphonePage } from './iphone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IphonePageRoutingModule
  ],
  declarations: [IphonePage]
})
export class IphonePageModule {}
