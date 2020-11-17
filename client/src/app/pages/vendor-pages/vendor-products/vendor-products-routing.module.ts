import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorProductsPage } from './vendor-products.page';

const routes: Routes = [
  {
    path: '',
    component: VendorProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorProductsPageRoutingModule {}
