import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iphone1Page } from './iphone1.page';

const routes: Routes = [
  {
    path: '',
    component: Iphone1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iphone1PageRoutingModule {}
