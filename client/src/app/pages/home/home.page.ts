import { Component } from '@angular/core';
import { UploadAmazonService } from '../../services/upload-amazon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  markets;

  constructor(private uploadAmazonService: UploadAmazonService) {
    /*
    uploadAmazonService.getMarkets().subscribe((ans: any) => {
      this.markets = ans.body.markets;
      console.log(this.markets);
    })
    */
  }

}
