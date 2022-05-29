
import { Players } from '../../model/players';
import { PlayerServiceService } from '../../service/playerService/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-read',
  templateUrl: './player-read.component.html',
  styleUrls: ['./player-read.component.css']
})
export class PlayerReadComponent implements OnInit {


  PlayerList: Array<Players> = [];

  displayedColumns = ['id', 'theAmount', 'name', 'valueUnity', 'amount', 'action'];


  constructor(private playerService: PlayerServiceService) {

  }

  ngOnInit(): void {

    this.playerService.readPlayer().subscribe(player => {
      this.PlayerList = player
    })

  }
  getTotal() {

    return this.PlayerList.reduce((acc, value) => acc + value.amount, 0);
  }
  getTotalPlayer() {

    return this.PlayerList.reduce((acc, value) => acc + parseInt(value.name), 0);

  }
  getTotaltheAmount() {


    return this.PlayerList.map(n => n.theAmount).reduce((acc, value) => acc + value, 0)

  }
  getTotaltheValueunity() {


    return this.PlayerList.reduce((acc, value) => acc + value.valueUnity, 0)

  }
  getTotaltheName() {

    return this.PlayerList.length


  }


}
