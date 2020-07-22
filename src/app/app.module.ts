import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContDialogComponent } from './dialogs/cont-dialog/cont-dialog.component';
import { CountryDialogComponent } from './dialogs/country-dialog/country-dialog.component';
import { CityDialogComponent } from './dialogs/city-dialog/city-dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    ContDialogComponent,
    CountryDialogComponent,
    CityDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    NgCircleProgressModule.forRoot({
      "radius": 70,
      "maxPercent": 100,
      "unitsFontSize": "29",
      "outerStrokeWidth": 3,
      "outerStrokeColor": "#0091c2",
      "innerStrokeColor": "#9e9e9e",
      "innerStrokeWidth": 1,
      "titleFontSize": "35",
      "titleFontWeight": "400",
      "showSubtitle": false
    }),
    
  ],

  entryComponents: [
    ContDialogComponent,
    CountryDialogComponent,
    CityDialogComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
