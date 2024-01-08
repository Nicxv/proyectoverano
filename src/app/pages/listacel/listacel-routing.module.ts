import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacelPage } from './listacel.page';

const routes: Routes = [
  {
    path: '',
    component: ListacelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacelPageRoutingModule {}
