import { Component, OnInit } from '@angular/core';
import { UploadAmazonService } from '../../../services/upload-amazon.service';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.page.html',
  styleUrls: ['./vendor-products.page.scss'],
})
export class VendorProductsPage implements OnInit {
  stands = []


  products: any[] = [
    {
      name: "Kilo de Manzanas Rojas",
      description: "Clásicas manzanas rojas, frescas y recién traídas de provincia.",
      price:  22.50 
    },
    {
      name: "Kilo de Mango Manila",
      description: "Nada como un buen mango para el desayuno, los últimos antes del fin de temporada.",
      price:  25.25 
    },
    {
      name: "Kilo de Plátano Dominico",
      description: "Este plátano más pequeño es perfecto para cocteles y se conserva mejor.",
      price:  30.00 
    }
  ]

  constructor(private uploadAmazonService: UploadAmazonService) { 
    uploadAmazonService.getStands().subscribe((res: any) => {
      console.log(res)
      this.stands = res.body.stands
    })
  }

  ngOnInit() {
  }

}
