import { Component, EventEmitter, Input, Output } from '@angular/core';
import { YearsOfTheGames } from './years-of-thegames.interface';
import { GameOfTheYearOpencriticService } from '../game-of-the-year-opencritic.service';
import { MatDialog } from '@angular/material/dialog';
import { OpencriticFetchedComponent } from './games-of-the-year-content/games-of-the-year-content.component/opencritic-fetched/opencritic-fetched.component';

@Component({
  selector: 'app-games-of-the-year',
  templateUrl: './games-of-the-year.component.html',
  styleUrls: ['./games-of-the-year.component.css'],
})
export class GamesOfTheYearComponent {
  constructor(
    private gameFetchedService: GameOfTheYearOpencriticService,
    public dialog: MatDialog
  ) {}

  selectedYear!: string;

  years: YearsOfTheGames[] = [
    { value: 'hall-of-fame', viewValue: 'Hall of Fame' },
    { value: 'upcoming', viewValue: 'Upcoming' },
    { value: 'popular', viewValue: 'Last 90 days' },
    { value: 'hall-of-fame/2023', viewValue: '2023' },
    { value: 'hall-of-fame/2022', viewValue: '2022' },
    { value: 'hall-of-fame/2021', viewValue: '2021' },
    { value: 'hall-of-fame/020', viewValue: '2020' },
    { value: 'hall-of-fame/2019', viewValue: '2019' },
    { value: 'hall-of-fame/018', viewValue: '2018' },
    { value: 'hall-of-fame/2017', viewValue: '2017' },
    { value: 'hall-of-fame/2016', viewValue: '2016' },
    { value: 'hall-of-fame/2015', viewValue: '2015' },
    { value: 'hall-of-fame/2014', viewValue: '2014' },
    { value: 'hall-of-fame/2013', viewValue: '2013' },
  ];

  //TODO refactoriser ce BORDEL et faire en sorte que le service repasse à chaque changement de value
  //get the year to the api request to fetch the game
  //put it in the service ?

  getYear(option: string): string {
    this.gameFetchedService.setUrlYear(option);
    console.log(this.selectedYear);
    return this.selectedYear;
  }

  openDialog() {
    const dialogRef = this.dialog.open(OpencriticFetchedComponent);
  }
}
