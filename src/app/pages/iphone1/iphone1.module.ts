import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Iphone1PageRoutingModule } from './iphone1-routing.module';

import { Iphone1Page } from './iphone1.page';
import { ComponentsModule } from 'src/app/components/componente1/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Iphone1PageRoutingModule
  ],
  declarations: [Iphone1Page]
})
export class Iphone1PageModule {}
