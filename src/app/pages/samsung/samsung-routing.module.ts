import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamsungPage } from './samsung.page';

const routes: Routes = [
  {
    path: '',
    component: SamsungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamsungPageRoutingModule {}
