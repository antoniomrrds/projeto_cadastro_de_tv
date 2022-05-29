import { ProductType } from '../../model/productsTv';
import { PlayerServiceService } from '../../service/playerService/player.service';
import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'




@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent implements OnInit {

  updatePlayerForm: FormGroup
  
  public title: string = 'Atualização de Players'
  
  
  product: ProductType
  
 
  constructor(private PlayerService: PlayerServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
   
      
      this.updatePlayerForm = fb.group({
        name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.nullValidator]),
        theAmount: new FormControl(0, [Validators.required, Validators.min(0)]),
        valueUnity: new FormControl(0, [Validators.required, Validators.min(0)]),
        amount: new FormControl(0, Validators.required)
       
        
        
      })
    }
    
    ngOnInit(): void {
      const id = this.route.snapshot.params.id
      
      this.PlayerService.readPlayerByid(id).subscribe(product => {
        this.product = product
        
      this.updatePlayerForm = this.fb.group({
        id:new FormControl(product.id),
        name: new FormControl(product.name,[Validators.required, Validators.minLength(2), Validators.nullValidator]),
        theAmount: new FormControl(product.theAmount,[Validators.required, Validators.min(0)]),
        valueUnity: new FormControl(product.valueUnity,[Validators.required, Validators.min(0)]),
        amount: new FormControl(product.amount,Validators.required)
      })

      
    })

    
    
  }
  
  cancel() {
    this.PlayerService.showMessage('Não houve alterações no Player !',true)
    this.router.navigate(['/'])
  }
  
  
  
  
  mult(obj: ProductType) {
    obj.amount = obj.theAmount * obj.valueUnity
    return obj
  }
  
  updatePlayer() { 
    
    let objmult = this.mult(this.updatePlayerForm.value)
    
    console.log( objmult)
    
    return this.PlayerService.updatePlayer(objmult).subscribe(() => {
      
      
      this.PlayerService.showMessage('Player alterado!!')
      this.router.navigate(['/'])
    })   
   }
  
  
  
  get names() {
    return this.updatePlayerForm.get('name')?.invalid
  }
  

    

}
