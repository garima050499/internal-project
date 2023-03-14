 import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { CIRejected, jobTracks } from '../data.type';
import { ChartDataService } from '../services/chart-data.service';
import { LeadershipviewService } from '../services/leadershipview.service';
import { map } from 'rxjs/operators'
import { elements } from 'chart.js';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public summitRequirement:number | undefined;
  public pendngRequirement:number | undefined;
  public fullfilledPositions:number | undefined;
  public CIRejected:number | undefined;
  public CIScheduled:number | undefined;
  public CIRejectedList:CIRejected[] | undefined;
  public CITBS:number | undefined;
  public jobTrack:any;
  

  columnlength:any;
  
  constructor(private chartData:ChartDataService,private leadership:LeadershipviewService) {
   
    
   }
   
  

  displayedColumns: string[] ;
  dataSource:MatTableDataSource<jobTracks>=new MatTableDataSource<jobTracks>();
 
  ngOnInit(): void {
    this.ReadJobTracks();
  }

  getProperty(obj:any,i:number): string {
    return obj["Column"+i];
  }
 ReadJobTracks (){    
    this.leadership.getLeadershipview().subscribe((result)=>{
      if(result){

        this.displayedColumns=Object.values(result[0]);
        const entries = Object.entries(result);
        console.log(entries.splice(1,entries.length));
        this.jobTrack = result;
        this.dataSource=new MatTableDataSource<jobTracks>(this.jobTrack);
      }
    })
}
}
