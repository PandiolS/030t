import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { MatDialog } from '@angular/material';
import { ContDialogComponent } from '../dialogs/cont-dialog/cont-dialog.component';
import { CountryDialogComponent } from '../dialogs/country-dialog/country-dialog.component';
import { CityDialogComponent } from '../dialogs/city-dialog/city-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private contDialog = ContDialogComponent;
  private countryDialog = CountryDialogComponent;
  private cityDialog = CityDialogComponent;

  public worldPercentage:any;
  public data:any;
  public currentYear = new Date().getFullYear();
  public years = this.currentYear - 2011;
  public cityLists: any; 
  public continentsCount: any = 0;
  public countryCount: any = 0;
  public citiesCount: any = 0;


  constructor(
    private service: ServiceService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {   
    this.getData();    
  }

  public getData() {
    this.service.getCities().subscribe((data: any) => {
      this.data = JSON.parse(data.body);
      
      this.continentsCount = this.data.conts.length;
      this.countryCount = this.data.cities.length

      this.cityLists = this.data.cities; 
      for (let item of this.cityLists) {      
        this.citiesCount +=  item.country.cities.length;                
      }      

      this.worldPercentage = ((this.countryCount/195)*100).toFixed(2);

    },
      (error: any) => { }
    );
  }


  public openContsDialog() {
    this.dialog.open(this.contDialog);
  }

  public openCountryDialog() {
    this.dialog.open(this.countryDialog);
  }

  public openCityDialog() {
    this.dialog.open(this.cityDialog);
  }

}
