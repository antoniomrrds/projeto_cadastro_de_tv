import { Component, OnInit } from '@angular/core';

import { ProductType } from '../../model/productsTv';
import { ProductsService } from '../../service/Products/products.service';



import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  
  public title: string = 'Deletar o Produto'
  
  
  product: ProductType
  
 
  constructor(private ProductsService: ProductsService,
    private router: Router,
  
    private route: ActivatedRoute) {
   
     
    }
    
    ngOnInit(): void {
      
      const id = this.route.snapshot.params.id
      
      this.ProductsService.readByid(id).subscribe(product => {
        this.product = product
     
    })


  }
  
  cancel() {
    this.ProductsService.showMessage('Você não deletou o Produto !',true)
    this.router.navigate(['/'])
  }
  
  
  deleteProduct() { 

    
    this.ProductsService.delete(`${this.product.id}`).subscribe(()=>{
      this.ProductsService.showMessage('Você deletou o Produto !')
      this.router.navigate(['/'])
      
    })
 
   }
  
  
  



}
