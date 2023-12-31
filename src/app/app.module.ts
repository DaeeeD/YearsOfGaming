import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpencriticFetchedComponent } from './games-of-the-year/games-of-the-year-content/games-of-the-year-content.component/opencritic-fetched/opencritic-fetched.component';
import { GamesOfTheYearComponent } from './games-of-the-year/games-of-the-year.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FetchedNewsComponent } from './games-of-the-year/fetched-news/fetched-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GamesOfTheYearComponent,
    OpencriticFetchedComponent,
    FetchedNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
