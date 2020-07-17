import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ServiceService } from '../shared/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public worldPercentage:any;
  public dataSource:any;
  public generalData: any;
  public currentYear = new Date().getFullYear();
  public years = this.currentYear - 2011;

  constructor(private service: ServiceService) { }

  ngOnInit() {   
    this.getData();
  }


  public getData() {
    this.service.getMapData().subscribe((data: any) => {
      this.dataSource = JSON.parse(data.body);      
      //get countries list   
      this.generalData = this.dataSource.data[0];
      this.worldPercentage = ((this.generalData.cou/195)*100).toFixed(2);      
       
    },
      (error: any) => { }
    );
  }

}
