import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iphone2Page } from './iphone2.page';

const routes: Routes = [
  {
    path: '',
    component: Iphone2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iphone2PageRoutingModule {}
