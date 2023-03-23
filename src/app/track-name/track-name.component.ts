import { Component, OnInit } from '@angular/core';
import { jobTracks } from '../data.type';
import { GraphRepresentationComponent } from '../graph-representation/graph-representation.component';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-track-name',
  templateUrl: './track-name.component.html',
  styleUrls: ['./track-name.component.css']
})
export class TrackNameComponent implements OnInit {

  constructor(private chartData:ChartDataService,private graph:GraphRepresentationComponent) { }
  public trackname:string;
  public jobTracks:jobTracks[];
  public totalRequirement:number;
  public pendingRequirement:number;
  public interviewing:number;
  public fullfilledPositions:number;
  public CIRejected:number;
  public CITBS:number;
  public i:number=0;

  ngOnInit(): void {
    this.chartData.jobTrackList().subscribe((result)=>{
      this.trackname = result[0].trackName;
      this.interviewing = result[0].CIScheduled;
      this.totalRequirement=result[0].summitRequirement;
      this.fullfilledPositions=result[0].fullfilledPositions;
      this.pendingRequirement=result[0].pendngRequirement;
      this.CIRejected=result[0].CIRejected;
      this.CITBS=result[0].CITBS;
      this.jobTracks=result;
      this.graph.creategraph(0);
      this.i=0;
      console.log("efhewgf   ",this.jobTracks[0].CIScheduled)
    })
  }
  changeTrackData(){ 
    if(this.graph.chart!=null){
      this.graph.chart.destroy();
      this.graph.chart1.destroy();
    }   
    let ind2=this.jobTracks.map(x => x.trackName).indexOf(this.trackname);
   
    this.trackname = this.jobTracks[ind2].trackName;
    this.interviewing = this.jobTracks[ind2].CIScheduled;
    this.totalRequirement=this.jobTracks[ind2].summitRequirement;
    this.fullfilledPositions=this.jobTracks[ind2].fullfilledPositions;
    this.pendingRequirement=this.jobTracks[ind2].pendngRequirement;
    
    this.graph.creategraph(ind2);


  }

}
