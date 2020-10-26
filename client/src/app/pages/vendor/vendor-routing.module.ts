import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorPage } from './vendor.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPage
  },
  {
    path: 'vendor-register',
    loadChildren: () => import('../vendor-register/vendor-register.module').then( m => m.VendorRegisterPageModule)
  },
  {
    path: 'vendor-menu',
    loadChildren: () => import('../vendor-menu/vendor-menu.module').then( m => m.VendorMenuPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPageRoutingModule {}
