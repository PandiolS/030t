import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-cont-dialog',
  templateUrl: './cont-dialog.component.html',
  styleUrls: ['./cont-dialog.component.css']
})
export class ContDialogComponent implements OnInit {

  dataSource: any;
  continents:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public result: any,
    public dialogRef: MatDialogRef<ContDialogComponent>,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    this.getConts();
  }

  public getConts() {
    this.service.getListData().subscribe((data: any) => {
      this.dataSource = JSON.parse(data.body);      
     console.log("this.data"), this.dataSource;
      this.continents = this.dataSource.conts;     
       
    },
      (error: any) => { }
    );
  }


}
