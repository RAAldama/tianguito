import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorRegisterPageRoutingModule } from './vendor-register-routing.module';

import { VendorRegisterPage } from './vendor-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorRegisterPageRoutingModule
  ],
  declarations: [VendorRegisterPage]
})
export class VendorRegisterPageModule {}
