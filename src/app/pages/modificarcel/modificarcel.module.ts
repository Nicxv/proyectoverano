import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcelPageRoutingModule } from './modificarcel-routing.module';

import { ModificarcelPage } from './modificarcel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarcelPageRoutingModule
  ],
  declarations: [ModificarcelPage]
})
export class ModificarcelPageModule {}
