import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaadminPageRoutingModule } from './pantallaadmin-routing.module';

import { PantallaadminPage } from './pantallaadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaadminPageRoutingModule
  ],
  declarations: [PantallaadminPage]
})
export class PantallaadminPageModule {}
