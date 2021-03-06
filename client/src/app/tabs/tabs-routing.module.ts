import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { RegisterGuard } from '../guard/register.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [RegisterGuard],
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/shop-pages/shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/vendor-pages/vendor/vendor.module').then(m => m.VendorPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
