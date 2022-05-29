import { ProductType } from '../../model/productsTv';
import { ProductsService } from '../../service/Products/products.service';
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updateProductform: FormGroup
  
  public title: string = 'Atualização de tvs'
  
  
  product: ProductType
  
 
  constructor(private ProductsService: ProductsService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
   
      
      this.updateProductform = fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.nullValidator]),
        theAmount: new FormControl(0, [Validators.required, Validators.min(0)]),
        valueUnity: new FormControl(0, [Validators.required, Validators.min(0)]),
        amount: new FormControl(0, Validators.required)
       
        
        
      })
    }
    
    ngOnInit(): void {
      const id = this.route.snapshot.params.id
      
      this.ProductsService.readByid(id).subscribe(product => {
        this.product = product
        
      this.updateProductform = this.fb.group({
        id:new FormControl(product.id),
        name: new FormControl(product.name,[Validators.required, Validators.minLength(2), Validators.nullValidator]),
        theAmount: new FormControl(product.theAmount,[Validators.required, Validators.min(0)]),
        valueUnity: new FormControl(product.valueUnity,[Validators.required, Validators.min(0)]),
        amount: new FormControl(product.amount,Validators.required)
      })

      
    })

    
    
  }
  
  cancel() {
    this.ProductsService.showMessage('Não houve alterações no Produto !',true)
    this.router.navigate(['/'])
  }
  
  
  
  
  mult(obj: ProductType) {
    obj.amount = obj.theAmount * obj.valueUnity
    return obj
  }
  
  updateProduct() { 
    
    let objmult = this.mult(this.updateProductform.value)
    
    console.log( objmult)
    
    return this.ProductsService.update(objmult).subscribe(() => {
      
      
      this.ProductsService.showMessage('Produto alterado!!')
      this.router.navigate(['/'])
    })   
   }
  
  
  
  get names() {
    return this.updateProductform.get('name')?.invalid
  }
  

  
  
  

}
