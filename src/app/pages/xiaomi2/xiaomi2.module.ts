import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Xiaomi2PageRoutingModule } from './xiaomi2-routing.module';

import { Xiaomi2Page } from './xiaomi2.page';
import { ComponentsModule } from 'src/app/components/componente1/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Xiaomi2PageRoutingModule
  ],
  declarations: [Xiaomi2Page]
})
export class Xiaomi2PageModule {}
