import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  product = {
    title: 'Kilo de Mango Manila',
    stand: 'Puesto de Fruta de Don Miguel',
    desc: 'Nada como un buen mango para el desayuno, los últimos antes del fin de temporada.',
    price: 35.25
  }

  constructor() { }

  ngOnInit() {
  }

}
