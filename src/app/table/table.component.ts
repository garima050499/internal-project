 import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { CIRejected, jobTracks } from '../data.type';
import { ChartDataService } from '../services/chart-data.service';

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
  public jobTrack:undefined | jobTracks[];
  public labels= ['trackName','summitRequirement','fullfilledPositions', 'pendngRequirement','CIRejected','CIScheduled', 'CITBS']
  public label1:string[];

  constructor(private chartData:ChartDataService) { }


  displayedColumns: string[] = this.labels;
  dataSource:MatTableDataSource<jobTracks>=new MatTableDataSource<jobTracks>();

  ngOnInit(): void {
    this.ReadJobTracks();
  }

  ReadJobTracks(){    
    this.chartData.jobTrackList().subscribe((result)=>{
      if(result){
        this.jobTrack = result;
        //this.label1=Object.values(result["trackName"]);
        //console.log(this.label1);
        console.log(Object.values(result[0]));
        this.dataSource=new MatTableDataSource<jobTracks>(this.jobTrack);
      }
    })
}
}
