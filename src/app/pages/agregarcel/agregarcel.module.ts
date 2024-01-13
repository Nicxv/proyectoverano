import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarcelPageRoutingModule } from './agregarcel-routing.module';

import { AgregarcelPage } from './agregarcel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarcelPageRoutingModule
  ],
  declarations: [AgregarcelPage]
})
export class AgregarcelPageModule {}
