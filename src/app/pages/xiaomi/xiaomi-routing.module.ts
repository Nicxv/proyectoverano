import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XiaomiPage } from './xiaomi.page';

const routes: Routes = [
  {
    path: '',
    component: XiaomiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XiaomiPageRoutingModule {}
