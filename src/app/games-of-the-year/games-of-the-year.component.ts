import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YearsOfTheGames } from './years-of-thegames.interface';

@Component({
  selector: 'app-games-of-the-year',
  templateUrl: './games-of-the-year.component.html',
  styleUrls: ['./games-of-the-year.component.css']
})
export class GamesOfTheYearComponent {

  selectChange: boolean = false;

  selectedYear!:string;


  years: YearsOfTheGames[] = [
    {value: 'hall-of-fame', viewValue: 'Hall of Fame'},
    {value: 'upcoming', viewValue: 'Upcoming'},
    {value: 'last-90days', viewValue: 'Last 90 days'},
    {value: 'year-2023', viewValue: '2023'},
    {value: 'year-2022', viewValue: '2022'},
    {value: 'year-2021', viewValue: '2021'},
    {value: 'year-2020', viewValue: '2020'},
    {value: 'year-2019', viewValue: '2019'},
    {value: 'year-2018', viewValue: '2018'},
    {value: 'year-2017', viewValue: '2017'},
    {value: 'year-2016', viewValue: '2016'},
    {value: 'year-2015', viewValue: '2015'},
    {value: 'year-2014', viewValue: '2014'},
    {value: 'year-2013', viewValue: '2013'},
  ]


  //get the year to the api request to fetch the game 
  //put it in the service ? 
  
  getYear(): string {

    this.selectChange = true;
    return this.selectedYear;

  }
  
}
