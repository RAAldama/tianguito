import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorProductsPageRoutingModule } from './vendor-products-routing.module';

import { VendorProductsPage } from './vendor-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorProductsPageRoutingModule
  ],
  declarations: [VendorProductsPage]
})
export class VendorProductsPageModule {}
