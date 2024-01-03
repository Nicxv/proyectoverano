import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Xiaomi3Page } from './xiaomi3.page';

const routes: Routes = [
  {
    path: '',
    component: Xiaomi3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Xiaomi3PageRoutingModule {}
