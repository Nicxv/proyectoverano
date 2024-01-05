import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XiaomiPageRoutingModule } from './xiaomi-routing.module';

import { XiaomiPage } from './xiaomi.page';
import { ComponentsModule } from 'src/app/components/componente1/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    XiaomiPageRoutingModule
  ],
  declarations: [XiaomiPage]
})
export class XiaomiPageModule {}
