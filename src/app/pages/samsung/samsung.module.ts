import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamsungPageRoutingModule } from './samsung-routing.module';

import { SamsungPage } from './samsung.page';
import { ComponentsModule } from 'src/app/components/componente1/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SamsungPageRoutingModule
  ],
  declarations: [SamsungPage]
})
export class SamsungPageModule {}
