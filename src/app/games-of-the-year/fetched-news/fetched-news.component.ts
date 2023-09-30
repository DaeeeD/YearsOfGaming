import { Component } from '@angular/core';
import { FetchedNewsService } from './fetched-news.service';
import { GameSpotNew } from './gamespotNews.model';

@Component({
  selector: 'app-fetched-news',
  templateUrl: './fetched-news.component.html',
  styleUrls: ['./fetched-news.component.css'],
})
export class FetchedNewsComponent {
  constructor(private newsService: FetchedNewsService) {}
  news = new Array<GameSpotNew>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.newsService.getNews().subscribe({
      next: (value) => {
        if (typeof value === 'object' && !Array.isArray(value)) {
          let temp: Array<any>;
          temp = Object.values(value);
          this.news = temp[6];
        } else {
          this.news = value;
        }
        console.log('la requete fonctionne');
        console.log(this.news);
      },
      error: (e) => console.error(e, 'ça ne marche pas , panik!!'),
      complete: () => console.info('Done and done bro!'),
    });
  }
}
