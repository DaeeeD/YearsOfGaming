import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GamesOfTheYearComponent } from './games-of-the-year/games-of-the-year.component';
import { Game } from './games-of-the-year/games-of-the-year-content/games-of-the-year-content.component/opencritic-fetched.content.model';

@Injectable({
  providedIn: 'root',
})
export class GameOfTheYearOpencriticService {
  private urlYear: any;

  constructor(private httpClient: HttpClient) {}

  private url: string = 'https://opencritic-api.p.rapidapi.com/game/';
  private options = {
    headers: {
      'X-RapidAPI-Key': 'eff3ab7f85mshdddd2f3caa89659p1ea6d4jsn42ae928ee59f',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com',
    },
  };

  public getGames(): Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.url + this.urlYear, this.options);
  }
  public setUrlYear(data: string) {
    this.urlYear = data;
    console.log(this.urlYear);
  }
}
