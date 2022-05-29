import { ProductType } from '../../model/productsTv';
import { ProductsService } from '../../service/Products/products.service';
import { Component, OnInit } from '@angular/core';

import{Router}from'@angular/router';
import{FormBuilder,FormGroup,Validators,FormControl}from'@angular/forms'

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
 
  createProductform:FormGroup
   
 public title:string = 'Cadastro de tvs'


  product: ProductType = { 
    name:'',
    valueUnity:0,
    theAmount:0,
    amount:0

}  

constructor(private ProductsService:ProductsService,private router:Router,private fb:FormBuilder) { 
   
    this.createProductform = fb.group({
        name: new FormControl('',[Validators.required ,Validators.minLength(2),Validators.nullValidator]),
        theAmount: new FormControl(1,[Validators.required,Validators.min(0)]),
        valueUnity: new FormControl(0,[Validators.required,Validators.min(0)]),
        amount:new FormControl(0,Validators.required)
      
        
    })
  }
  
  ngOnInit(): void {
    
  
  }
  
  cancel(){
    this.ProductsService.showMessage('Produto nao foi Criado !',true)
    this.router.navigate(['/'])
  }

  mult(obj:ProductType){
    obj.amount = obj.theAmount * obj.valueUnity
    return obj 
  }

  createProduct(){
    let obj = this.createProductform.value
    this.ProductsService.create(this.mult(obj)).subscribe(()=>{
      
        this.ProductsService.showMessage('Produto Criado !')
        this.router.navigate(['/'])
   
      })
    
  }
  get names(){ 
    return this.createProductform.get('name')?.invalid
  }  

}
