import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CIRejected } from '../data.type';
import { GraphRepresentationComponent } from '../graph-representation/graph-representation.component';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.css']
})
export class TableDialogComponent implements OnInit {


  public CIRejectedList:CIRejected[] | undefined;
  displayedColumns: string[] = ['name','employeeCode'];
  dataSource1:MatTableDataSource<CIRejected>=new MatTableDataSource<CIRejected>();

  constructor(private chartData:ChartDataService) { }

  ngOnInit(): void {
    let ind=this.chartData.ind;
    
    this.chartData.CIList(ind).subscribe((result)=>{
      if(result){
        this.CIRejectedList = result;
        this.dataSource1=new MatTableDataSource<CIRejected>(this.CIRejectedList);
      }
    })
  }

  

}
