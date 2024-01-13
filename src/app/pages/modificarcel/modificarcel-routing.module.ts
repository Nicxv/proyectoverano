import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarcelPage } from './modificarcel.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarcelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarcelPageRoutingModule {}
