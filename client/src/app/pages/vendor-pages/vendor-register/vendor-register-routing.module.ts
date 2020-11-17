import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorRegisterPage } from './vendor-register.page';

const routes: Routes = [
  {
    path: '',
    component: VendorRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorRegisterPageRoutingModule {}
