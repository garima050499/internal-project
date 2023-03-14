import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CIEditFormComponent } from '../ciedit-form/ciedit-form.component';
import { CIRejected } from '../data.type';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css']
})
export class TableDialogComponent implements OnInit {


  public CIRejectedList:CIRejected[] | undefined;
  displayedColumns: string[] = ['name','employeeCode','reason','date','actionEdit'];
  dataSource1:MatTableDataSource<CIRejected>=new MatTableDataSource<CIRejected>();
  
  constructor(private chartData:ChartDataService, private matDialog:MatDialog) { }

  ngOnInit(): void {
    let ind=this.chartData.ind;
    
    this.chartData.CIList(ind).subscribe((result)=>{
      if(result){
        this.CIRejectedList = result;
        this.dataSource1=new MatTableDataSource<CIRejected>(this.CIRejectedList);
      }
    })
  }
  Edit(data:CIRejected){
    console.log(data.Name)
    this.chartData.CIRejectedFormEditData=data;
    this.matDialog.open(CIEditFormComponent,{
      width:'750px',
      height:'500px' 
    })
  }
 

}
