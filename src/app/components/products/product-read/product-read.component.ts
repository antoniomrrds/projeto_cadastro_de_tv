import { ProductType } from '../../model/productsTv';
import { Component, OnInit } from '@angular/core';


import { ProductsService } from '../../service/Products/products.service';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {


  productList: Array<ProductType> = [];

  //  displayedColumns = ['id', 'theAmount', 'name','valueUnity','amount'];
  displayedColumns = ['id', 'theAmount', 'name', 'valueUnity', 'amount', 'action'];


  constructor(private productService: ProductsService) {

  }

  ngOnInit(): void {

    this.productService.read().subscribe(products => {
      this.productList = products

    })

  }
  getTotal() {

    return this.productList.reduce((acc, value) => acc + value.amount, 0);
  }
  getTotalProducts() {

    return this.productList.reduce((acc, value) => acc + parseInt(value.name), 0);

  }
  getTotaltheAmount() {


    return this.productList.map(n => n.theAmount).reduce((acc, value) => acc + value, 0)

  }
  getTotaltheValueunity() {


    return this.productList.reduce((acc, value) => acc + value.valueUnity, 0)

  }
  getTotaltheName() {

    return this.productList.length


  }



}
