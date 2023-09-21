import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GamesOfTheYearComponent } from './games-of-the-year/games-of-the-year.component';
import { catchError } from 'rxjs';
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: Améliorer le message d'erreur !!
      console.log(`${operation} failed: ${error.message}`);
      //Permet de ne pas planter l'app en renvoyant un resultat vide
      return of(result as T);
    };
  }

  public getGames(): Observable<Game[]> {
    return this.httpClient
      .get<Game[]>(this.url + this.urlYear, this.options)
      .pipe(catchError(this.handleError<Game[]>('getGames', [])));
  }
  public setUrlYear(data: string) {
    this.urlYear = data;
  }
}
