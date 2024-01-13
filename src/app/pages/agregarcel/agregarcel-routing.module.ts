import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarcelPage } from './agregarcel.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarcelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarcelPageRoutingModule {}
