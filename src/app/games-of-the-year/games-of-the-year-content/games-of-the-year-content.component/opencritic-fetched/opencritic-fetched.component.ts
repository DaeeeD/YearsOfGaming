import { Component, Input, OnInit} from '@angular/core';
import { Game } from '../opencritic-fetched.content.model';
import { GameOfTheYearOpencriticService } from 'src/app/game-of-the-year-opencritic.service';

@Component({
  selector: 'app-opencritic-fetched',
  templateUrl: './opencritic-fetched.component.html',
  styleUrls: ['./opencritic-fetched.component.css']
})
export class OpencriticFetchedComponent {

  constructor(private gameService: GameOfTheYearOpencriticService) {}

  @Input() testOfTheYear: string = '';

  games = new Array<Game>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gameService.getGames().subscribe(response => {
      this.games = response.map( data =>
        {
          return new Game(
            data.id,
            data.name,
            data.url,
            data.firstReleaseDate,
            data.topCriticScore,
            data.tier
          )
        })
    })
    
  }

}
