import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PantallaadminPage } from './pantallaadmin.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PantallaadminPageRoutingModule {}
