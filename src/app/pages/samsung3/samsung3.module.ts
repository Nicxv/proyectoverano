import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Samsung3PageRoutingModule } from './samsung3-routing.module';

import { Samsung3Page } from './samsung3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Samsung3PageRoutingModule
  ],
  declarations: [Samsung3Page]
})
export class Samsung3PageModule {}
