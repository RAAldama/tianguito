import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
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
        loadChildren: () => import('../pages/shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pages/vendor/vendor.module').then(m => m.VendorPageModule)
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
