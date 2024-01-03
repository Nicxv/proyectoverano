import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Iphone3Page } from './iphone3.page';

const routes: Routes = [
  {
    path: '',
    component: Iphone3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Iphone3PageRoutingModule {}
