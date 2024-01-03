import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XiaomiPageRoutingModule } from './xiaomi-routing.module';

import { XiaomiPage } from './xiaomi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XiaomiPageRoutingModule
  ],
  declarations: [XiaomiPage]
})
export class XiaomiPageModule {}
