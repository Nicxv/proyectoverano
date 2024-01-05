import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Samsung2Page } from './samsung2.page';

const routes: Routes = [
  {
    path: '',
    component: Samsung2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Samsung2PageRoutingModule {}
