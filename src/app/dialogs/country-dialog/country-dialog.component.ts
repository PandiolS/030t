import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-country-dialog',
  templateUrl: './country-dialog.component.html',
  styleUrls: ['./country-dialog.component.css']
})
export class CountryDialogComponent implements OnInit {

  dataSource: any;
  countries:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<CountryDialogComponent>,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    this.getCounts();
  }

  public getCounts() {
    this.service.getListData().subscribe((data: any) => {
      this.dataSource = JSON.parse(data.body);     
      this.countries = this.dataSource.count;   
       
    },
      (error: any) => { }
    );
  }

}
