import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IphonePage } from './iphone.page';

const routes: Routes = [
  {
    path: '',
    component: IphonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IphonePageRoutingModule {}
