import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IphonePageRoutingModule } from './iphone-routing.module';

import { IphonePage } from './iphone.page';
import { ComponentsModule } from 'src/app/components/componente1/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    IphonePageRoutingModule
  ],
  declarations: [IphonePage]
})
export class IphonePageModule {}
