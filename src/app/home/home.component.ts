import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ServiceService } from '../shared/service.service';
import { MatDialog } from '@angular/material';
import { ContDialogComponent } from '../dialogs/cont-dialog/cont-dialog.component';
import { CountryDialogComponent } from '../dialogs/country-dialog/country-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private contDialog = ContDialogComponent;
  private countryDialog = CountryDialogComponent;

  public worldPercentage:any;
  public dataSource:any;
  public data:any;
  public generalData: any;
  public currentYear = new Date().getFullYear();
  public years = this.currentYear - 2011;
  public countries: any
  public continents: any  
  public contsLength: number
  public countLength: number
 


  constructor(
    private service: ServiceService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {   
    this.getData();
  }

  public getData() {
    this.service.getListData().subscribe((data: any) => {
      this.data = JSON.parse(data.body);    
      this.continents = this.data.conts;  
      this.countries = this.data.count;      
      
      this.contsLength = this.continents.length;  
      this.countLength = this.countries.length;
      
      this.worldPercentage = ((this.countLength/195)*100).toFixed(2);
       
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

}
