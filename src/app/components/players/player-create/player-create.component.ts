import { Component, OnInit } from '@angular/core';
import { Players } from '../../model/players';



import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { PlayerServiceService} from '../../service/playerService/player.service';
import { ReturnStatement } from '@angular/compiler';



@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {

  createPlayersform: FormGroup

  public title: string = 'Cadastro de Player'


  players: Players = {
    name: '',
    valueUnity: 0,
    theAmount: 0,
    amount: 0

  }

  constructor(private PlayerService: PlayerServiceService,
    private router: Router,
    private fb: FormBuilder) {

    this.createPlayersform = fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.nullValidator]),
      theAmount: new FormControl(1, [Validators.required, Validators.min(0)]),
      valueUnity: new FormControl(0, [Validators.required, Validators.min(0)]),
      amount: new FormControl(0, Validators.required)


    })
  }

  ngOnInit(): void {


  }

  cancel() {
    this.PlayerService.showMessage('Player nao foi Criado !', true)
    this.router.navigate(['/'])
  }

  mult(obj: Players) {
    obj.amount = obj.theAmount * obj.valueUnity
    return obj
  }

  createPlayer() {
    let obj = this.createPlayersform.value
    let objValue = this.mult(obj)

console.log(objValue)

     this.PlayerService.createPlayer(objValue).subscribe(() => {

     this.PlayerService.showMessage('Player Criado !')
     this.router.navigate(['/'])

   })

  }
  get names() {
    return this.createPlayersform.get('name')?.invalid
  }







}
