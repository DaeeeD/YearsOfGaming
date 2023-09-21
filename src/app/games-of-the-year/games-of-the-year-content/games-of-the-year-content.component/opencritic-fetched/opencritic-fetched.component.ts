import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GameOfTheYearOpencriticService } from 'src/app/game-of-the-year-opencritic.service';
import { Game } from '../opencritic-fetched.content.model';
import { retry, catchError, pipe } from 'rxjs';

@Component({
  selector: 'app-opencritic-fetched',
  templateUrl: './opencritic-fetched.component.html',
  styleUrls: ['./opencritic-fetched.component.css'],
})
export class OpencriticFetchedComponent implements OnInit, OnChanges {
  constructor(private gameService: GameOfTheYearOpencriticService) {}

  @Input() testOfTheYear: string = '';

  games = new Array<Game>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['testOfTheYear']) {
      console.log(
        'changement de ',
        changes['testOfTheYear'].previousValue,
        'à',
        changes['testOfTheYear'].currentValue
      );
    }
    this.gameService.getGames().subscribe(
      pipe((response) => {
        this.games = response.map((data) => {
          return new Game(
            data.id,
            data.name,
            data.url,
            data.firstReleaseDate,
            data.topCriticScore,
            data.tier,
            data.images
          );
        });
      })
    );
    (error: any) => {
      console.error('damned! encore raté !: ', error);
    };
  }
}
