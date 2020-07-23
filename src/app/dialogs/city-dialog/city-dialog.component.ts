import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-city-dialog',
  templateUrl: './city-dialog.component.html',
  styleUrls: ['./city-dialog.component.css']
})
export class CityDialogComponent implements OnInit {

  dataSource: any;
  cities:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<CityDialogComponent>,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    this.getCities();
  }

  public getCities() {
    this.service.getCities().subscribe((data: any) => {
      this.dataSource = JSON.parse(data.body);
      console.log("cir", this.dataSource)     
      this.cities = this.dataSource.cities;   

       
    },
      (error: any) => { }
    );
  }

}
