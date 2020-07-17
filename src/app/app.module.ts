import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
