import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './games-of-the-year/games-of-the-year-content/games-of-the-year-content.component/opencritic-fetched.content.model';


@Injectable({
  providedIn: 'root'
})
export class GameOfTheYearOpencriticService {

  constructor( private httpClient: HttpClient) { }


  //TODO récupérer l'url qui convient avec le choix de l'utilisateur !!!

  
  private url: string = "https://opencritic-api.p.rapidapi.com/game/hall-of-fame"
  private options = {
    headers: {
      'X-RapidAPI-Key': 'eff3ab7f85mshdddd2f3caa89659p1ea6d4jsn42ae928ee59f',
      'X-RapidAPI-Host': 'opencritic-api.p.rapidapi.com'
    }
  }

  public getGames(): Observable<Game[]> {
    
    return this.httpClient.get<Game[]>(this.url, this.options)
  }
}
