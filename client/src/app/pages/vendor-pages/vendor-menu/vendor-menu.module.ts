import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorMenuPageRoutingModule } from './vendor-menu-routing.module';

import { VendorMenuPage } from './vendor-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorMenuPageRoutingModule
  ],
  declarations: [VendorMenuPage]
})
export class VendorMenuPageModule {}
