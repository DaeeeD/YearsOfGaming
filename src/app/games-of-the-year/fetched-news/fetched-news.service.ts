import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameSpotNew } from './gamespotNews.model';

const headers = new HttpHeaders()
  .append('Content-Type', 'application/json')
  .append('Access-Control-Allow-Headers', 'Content-Type')
  .append('Access-Control-Allow-Methods', 'GET')
  .append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root',
})
export class FetchedNewsService {
  constructor(private http: HttpClient) {}

  private url: string = 'http://localhost:3000/getGamespotArticles';

  public getNews(): Observable<GameSpotNew[]> {
    return this.http.get<GameSpotNew[]>(this.url, { headers });
  }
}
