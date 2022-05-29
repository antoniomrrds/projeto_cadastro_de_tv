import { Component, OnInit } from '@angular/core';
import { Players } from '../../model/players';
import { PlayerServiceService } from '../../service/playerService/player.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {

 
  
  public title: string = 'Deletar o Produto'
  
  
  product: Players
  
 
  constructor(private ProductsService: PlayerServiceService,
    private router: Router,
  
    private route: ActivatedRoute) {
   
     
    }
    
    ngOnInit(): void {
      
      const id = this.route.snapshot.params.id
      
      this.ProductsService.readPlayerByid(id).subscribe(player => {
        this.product = player
     
    })


  }
  
  cancel() {
    this.ProductsService.showMessage('Você não deletou o Player !',true)
    this.router.navigate(['/'])
  }
  
  
  deletePlayer() { 

    
    this.ProductsService.deletePlayer(`${this.product.id}`).subscribe(()=>{
      this.ProductsService.showMessage('Você deletou o Player !')
      this.router.navigate(['/'])
      
    })
 
   }
  
  
  
}
