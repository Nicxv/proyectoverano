import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Samsung1Page } from './samsung1.page';

const routes: Routes = [
  {
    path: '',
    component: Samsung1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Samsung1PageRoutingModule {}
