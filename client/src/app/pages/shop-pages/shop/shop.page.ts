import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.page.html',
  styleUrls: ['shop.page.scss']
})
export class ShopPage {

  stands: any[] = [
    {
      name: "Puesto de Frutas de Don Miguel",
      description: "La fruta más fresca y deliciosa del lugar sólo la tiene Don Miguel. ", 
      id: 1
    },
    {
      name: "Tacos de Birria “El Ovón”",
      description: "No encontraras barbacoa más rica y los tacos más deliciosos que no seán los de El Ovón, damos tacos, caldos y hasta tortas.",
      id: 2
    },
    {
      name: "Segunda Mano del Json",
      description: "Ya sea aquel juego de XBox 360 que no encontrabas o la película recién estrenada...",
      id: 3
    }
  ]

  constructor() {}

}
