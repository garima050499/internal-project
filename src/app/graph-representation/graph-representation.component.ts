import { Component, OnInit } from '@angular/core';
import Chart, { ChartData, registerables } from 'chart.js/auto';
import { _isClickEvent } from 'chart.js/dist/helpers/helpers.core';
import { Console } from 'console';
import { forkJoin } from 'rxjs';
import { CIRejected, jobTracks } from '../data.type';
import { ChartDataService } from '../services/chart-data.service';

@Component({
  selector: 'app-graph-representation',
  templateUrl: './graph-representation.component.html',
  styleUrls: ['./graph-representation.component.css']
})
export class GraphRepresentationComponent implements OnInit {
  public chart: any;
  public chart1:any;
  public n:number=0;
  public i:number=0;
  public labels1:string[] ;
  public summitRequirement:number | undefined;
  public pendngRequirement:number | undefined;
  public fullfilledPositions:number | undefined;
  public CIRejected:number | undefined;
  public CIScheduled:number | undefined;
  public CIRejectedList:CIRejected[] | undefined;
  public CITBS:number | undefined;
  public jobTrack:undefined | jobTracks[];
  constructor(private chartData:ChartDataService) {
    this.labels1=['CIRejected','CIScheduled', 'CITBS'];
    console.log(this.labels1);
    
  }

  ngOnInit():void{
    
    this.ReadJobTracks();
  }

  barClick(e,chart){
    let ind=chart[0].index
    console.log(this.labels1[ind])
    this.chartData.CIList(this.labels1[ind]).subscribe((result)=>{
      if(result){
        this.CIRejectedList = result;
        console.log(result);
      }

      
    })
  }
  
  ReadJobTracks(){    
      this.chartData.jobTrackList().subscribe((result)=>{
        if(result){
          this.jobTrack = result;
          this.createChart1();
        }
      })

     


  }
  createChart1(){
    if(this.jobTrack && this.n<this.jobTrack.length){
      this.n++;
      this.summitRequirement=this.jobTrack[this.i].summitRequirement
      this.pendngRequirement=this.jobTrack[this.i].pendngRequirement
      this.CIRejected=this.jobTrack[this.i].CIRejected
      this.CIScheduled=this.jobTrack[this.i].CIScheduled
      this.fullfilledPositions=this.jobTrack[this.i].fullfilledPositions
      this.CITBS=this.jobTrack[this.i].CITBS
      
      this.chart = new Chart("MyChart"+this.n, {
        type: 'bar', //this denotes the type of chart
        
        data: {// values on X-Axis
          labels: ['Summit Requirement','Fullfilled Position', 'Pending Reqiurement'],
          datasets: [
            {
              label: this.jobTrack[this.i].trackName,
              data: [this.summitRequirement, this.fullfilledPositions ,this.pendngRequirement],
              backgroundColor: [
                'rgba(255,206,86,0.5)',
                'rgba(255,159,64,0.5)',
                'rgba(75,192,192,0.5)',		
              ],
              //hoverOffset: 4
            }
          ],
        },
        
        options: {
          
          aspectRatio:2.5,   
                
        }
        
        
      }
      );

     

      this.chart1 = new Chart("MyCharts"+this.n, {
        type: 'bar', //this denotes the type of chart
        
        data: {// values on X-Axis
          labels: ['CI Rejected','CI Scheduled', 'CI TBS'],
          datasets: [
            {
              label: this.jobTrack[this.i].trackName,
              data: [this.CIRejected, this.CIScheduled ,this.CITBS],
              backgroundColor: [
                'rgba(255,26,104,0.5)',
                'rgba(54,162,235,0.5)',
                'rgba(153,102,255,0.5)',		
              ],
              //hoverOffset: 4
            }
          ],
        },
        options: {
          aspectRatio:2.5,
          //onClick:this.barClick
          onClick: (e,chart) => this.barClick(e,chart),
          plugins:{
            legend:{
              labels:{
                boxWidth:0,
              }
            }

          }
        }
        
      }
      );



      this.i++;
    }
  }

  nextChart(){
    if(this.n<this.jobTrack.length){
      
      let n1=this.n;
      n1++;
      let previousBoard=document.getElementById("MyChart"+this.n);
      previousBoard.id="MyChart"+n1;
      let previousBoard1=document.getElementById("MyCharts"+this.n);
      previousBoard1.id="MyCharts"+n1;
      this.chart.destroy();
      this.chart1.destroy();
     
      
      
      
    }else{
      this.n=0;
      this.i=0;
      let cnavasBoard=document.createElement('canvas');
      cnavasBoard.innerHTML=this.chart;
      cnavasBoard.id="MyChart1";

      let container=document.getElementById('container');
      let canvasBoard1=document.createElement('canvas');
      canvasBoard1.innerHTML=this.chart1;
      canvasBoard1.id="MyCharts1";
      let canvasdiv=document.createElement('div');
      let canvasdiv1=document.createElement('div');
      
      let container1=document.getElementById('container1');
      // let canvasBoard2=document.createElement('canvas');
      // canvasBoard2.innerHTML=this.chart1;
      // canvasBoard2.id="MyCharts1";


      canvasdiv.className="chart-container";
      canvasdiv.appendChild(cnavasBoard);
      canvasdiv1.className="chart-container";
      canvasdiv1.appendChild(canvasBoard1);
      container?.append(canvasdiv);
      container.replaceChildren(cnavasBoard);
      container1?.append(canvasdiv1);
      container1.replaceChildren(canvasBoard1);
     
      this.chart.destroy();
      this.chart1.destroy();
    }
    this.createChart1();
  } 
}



// createChart(){    
  
//   this.jobTrack?.forEach(data => {
//     this.n++;
//     this.summitRequirement=data.summitRequirement;
//     this.pendngRequirement=data.pendngRequirement;
//     this.fullfilledPositions=data.fullfilledPositions;
//     this.CIRejected=data.CIRejected;
//     this.CIScheduled=data.CIScheduled;
//     this.CITBS=data.CITBS;
//     this.chartName="MyChart"+this.n;
//     this.canvasId=document.getElementsByClassName("board");
//     this.canvasId.id=this.chartName;

  

//     this.chart = new Chart("MyChart"+this.n, {
//       type: 'bar', //this denotes the type of chart

//       data: {// values on X-Axis
//         labels: ['Summit Requirement', 'Pending Reqiurement','Fullfilled Position','CI Rejected','CI Scheduled','CI TBS', ],
//         datasets: [
//           {
//             label: data.trackName,
//             data: [this.summitRequirement, this.pendngRequirement, this.fullfilledPositions, this.CIRejected, this.CIScheduled, this.CITBS],
//             backgroundColor: [
//               'red',
//               'pink',
//               'green',
//               'yellow',
//               'orange',
//               'blue',			
//             ],
//             //hoverOffset: 4
//           }
//         ],
//       },
//       options: {
//         aspectRatio:2.5
//       }

//     }
//     );
   
//     this.chart1.push(this.chart);
    
//   })
  
  
// }