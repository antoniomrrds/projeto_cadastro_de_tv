import { Players } from './../model/players';
import { ProductType } from '../model/productsTv';
import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../service/playerService/player.service';
import { ProductsService } from '../service/Products/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  planeValue: number = 0;
  planeValueMouth: number = 0;
  theAmount: number = 0;
  result: number = 0;
  license: number = 0;
  labor: number = 0;
  formOfPayment: string;

  PlayerList: Array<Players> = [];
  productList: Array<ProductType> = [];
  planeYearly: Array<any> = [
    {
      "name": "Plano Bronze",
      "valuePlane": 15.90

    },
    {
      "name": "Plano Prata",
      "valuePlane": 19.59

    },
    {
      "name": "Plano Ouro",
      "valuePlane": 23.01

    },
    {
      "name": "Plano Ouro",
      "valuePlane": 23.01

    },
    {
      "name": "Plano Diamante",
      "valuePlane": 26.67

    },
  ];



  constructor(private playerReadService: PlayerServiceService,
    private productReadService: ProductsService
  ) {

  }

  ngOnInit(): void {

    this.playerReadService.readPlayer().subscribe(player => {
      this.PlayerList = player
    })
    this.productReadService.read().subscribe(product => {
      this.productList = product
    })

  }

  initialInvestment(){
    return this.getTotalPlayer()+this.getTotalProduct()+ this.totalPlane()+this.labor
  }

  getTotalPlayer() {

    return this.PlayerList.reduce((acc, value) => acc + value.amount, 0);
  }
  getTotalProduct() {

    return this.productList.reduce((acc, value) => acc + value.amount, 0);
  }
  totalPlane() {

    if (this.formOfPayment == 'Anual') {

      this.result = this.planeValue * this.theAmount
      return this.result

    } else if(this.formOfPayment=='mensal'){


      if (this.planeValue == 15.90 || this.planeValue == 19.59) {
        this.planeValueMouth = (this.planeValue == 15.90) ? 39.90 : 49.00

      } else {
        this.planeValueMouth = (this.planeValue == 23.01) ? 59.00 : 69.00
      }

      this.result = this.theAmount * this.planeValueMouth
      return this.result

    }
    return 0

  }


}
