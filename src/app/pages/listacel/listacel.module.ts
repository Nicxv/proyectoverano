import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacelPageRoutingModule } from './listacel-routing.module';

import { ListacelPage } from './listacel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacelPageRoutingModule
  ],
  declarations: [ListacelPage]
})
export class ListacelPageModule {}
