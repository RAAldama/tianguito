import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.page.html',
  styleUrls: ['./stand.page.scss'],
})
export class StandPage implements OnInit {

  products: any[] = [
    {
      name: "Kilo de Manzanas Rojas",
      stand: 'Puesto de Fruta de Don Miguel',
      description: "Clásicas manzanas rojas, frescas y recién traídas de provincia.",
      price:  22.50, 
      id: 1
    },
    {
      name: "Kilo de Mango Manila",
      stand: 'Puesto de Fruta de Don Miguel',
      description: "Nada como un buen mango para el desayuno, los últimos antes del fin de temporada.",
      price:  25.25, 
      id: 2 
    },
    {
      name: "Kilo de Plátano Dominico",
      stand: 'Puesto de Fruta de Don Miguel',
      description: "Este plátano más pequeño es perfecto para cocteles y se conserva mejor.",
      price:  30.00, 
      id: 3
    }
  ]

  productPage: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  productPageAppear(){
    this.productPage = !this.productPage;
  }

}
