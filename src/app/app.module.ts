import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GamesOfTheYearComponent } from './games-of-the-year/games-of-the-year.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GamesOfTheYearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
