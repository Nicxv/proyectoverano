import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Xiaomi2Page } from './xiaomi2.page';

const routes: Routes = [
  {
    path: '',
    component: Xiaomi2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Xiaomi2PageRoutingModule {}
