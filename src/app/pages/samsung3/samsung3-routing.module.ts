import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Samsung3Page } from './samsung3.page';

const routes: Routes = [
  {
    path: '',
    component: Samsung3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Samsung3PageRoutingModule {}
