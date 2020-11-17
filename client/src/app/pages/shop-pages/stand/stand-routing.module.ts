import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandPage } from './stand.page';

const routes: Routes = [
  {
    path: '',
    component: StandPage
  },
  {
    path: 'product/:id',
    loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandPageRoutingModule {}
