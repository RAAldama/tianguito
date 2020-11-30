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
      quantity: 0,
      id: 1
    },
    {
      name: "Kilo de Mango Manila",
      stand: 'Puesto de Fruta de Don Miguel',
      description: "Nada como un buen mango para el desayuno, los últimos antes del fin de temporada.",
      price:  25.25, 
      quantity: 0,
      id: 2 
    },
    {
      name: "Kilo de Plátano Dominico",
      stand: 'Puesto de Fruta de Don Miguel',
      description: "Este plátano más pequeño es perfecto para cocteles y se conserva mejor.",
      price:  30.00, 
      quantity: 0,
      id: 3
    }
  ]

  purchase = [];
  index: number;
  price = 0;
  totalPrice = 0;

  productPage: boolean = false;
  cartPage: boolean = false;
  standPage: boolean = true;

  constructor() { 
    this.index = 0;
  }

  ngOnInit() {
  }

  productPageAppear(index){
    this.productPage = !this.productPage;
    this.index = index;
    this.price = this.products[this.index].price;
  }

  productQuantity(value){
    if(  value === 0 || value === undefined ){
      this.price = this.products[this.index].price;
    }

   this.products[this.index].quantity = value;
    this.price = this.products[this.index].price * value;
    
  }

  addProduct(product){
    this.purchase.push(product);
    console.log(this.purchase);
  }

  cart(){
    this.cartPage = true; 
    this.standPage = false;

    this.products.forEach(product => {
      this.totalPrice = (product.price * product.quantity) + this.totalPrice;
    });
  }

}
