import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationPage } from './location.page';

import { LocationPageRoutingModule } from './location-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    LocationPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIUjg9tznCj5HejSGikuBtrVaoxx9naMI', 
      libraries: ['places']
    }),
  ],
  declarations: [LocationPage]
})
export class LocationPageModule {}
