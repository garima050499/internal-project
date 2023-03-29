import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateComponent } from '../candidate/candidate.component';
import { candidateList, } from '../data.type';
import { CandidateService } from '../services/candidate.service';
import { ChartDataService } from '../services/chart-data.service';
import { filter } from 'rxjs';
import { threadId } from 'worker_threads';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

interface ITableFilter {
  Name: string;
  skill: any;
  Email:string;
  trackName:string
}

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})





export class CandidateDetailsComponent implements OnInit {
  displayedColumns = ["FirstName","Email","TrackName","Experience","Skill"];
  dataSource1:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  dataSource2:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  dataSource3:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  dataSource4:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  dataSource5:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  public flag=false;
  public action="Action";
  public formData:any|undefined;
  public rowData:any;
  public updatedCandidate:candidateList;
  candidateFilters: any=[];
  filterDictionary= new Map<string,string>();
  public employeeId:number;
  

  constructor(private chartData:ChartDataService,private form:CandidateService,private router: Router,private udatedCandidate:CandidateComponent) { }
  public CandidateList:candidateList[];

  public forms = new FormGroup({
    Name: new FormControl(""),
    skill: new FormControl(""),
    trackName: new FormControl(""),
    Email: new FormControl(""), 
  });


  ngOnInit(): void {
    //console.log(this.form.updateNavigation)
      this.chartData.candidateList().subscribe((result)=>{
      if(result){
        for(var i=0;i<result.length-1;i++){
          result[i].FirstName=result[i].FirstName+" "+result[i].LastName
        }
        
        this.CandidateList = result;

        this.dataSource2=new MatTableDataSource<candidateList>(this.CandidateList);
        this.dataSource1=new MatTableDataSource<candidateList>(this.CandidateList);
        this.dataSource3=new MatTableDataSource<candidateList>(this.CandidateList)
        this.dataSource4=new MatTableDataSource<candidateList>(this.CandidateList);
        this.dataSource5=new MatTableDataSource<candidateList>(this.CandidateList)
      }
    }) 

    if(this.form.updateNavigation){
      //console.log("jhdfcgewfcjewfcjwe")
      this.form.getCandidateDetailsById().subscribe((result)=>{
        if(result){
          this.updatedCandidate = result;
          this.dataSource2.filter=this.updatedCandidate.FirstName
          this.dataSource1=this.dataSource2;
          this.flag=true;
        }
      })
    }else{
      this.form.updateNavigation=false;
      this.flag=false;
    }
  }
  FilterCandidate(){
    // let filterValue="";
    // let flag=0;
    // //console.log(this.forms);
    // if(this.forms.get("Name").value){
    //   console.log(this.forms.get("Name").value)
    //   filterValue=this.forms.get("Name").value
    //   flag=1;
    // }
    // else if(this.forms.get("Email").value){
    //   filterValue=this.forms.get("Email").value
    //   flag=1;
    // }else if(this.forms.get("skill").value){
    //   filterValue=this.forms.get("skill").value
    //   flag=1;
    // }else if(this.forms.get("trackName").value){
    //   filterValue=this.forms.get("trackName").value
    //   flag=1;
    // }else{
    //   flag=0;
    // }

    
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // if(filterValue!=""){

    //   this.dataSource2.filter = filterValue;
    //   console.log(this.dataSource2)
    //   this.flag=true;
    //   this.dataSource1=this.dataSource2;
    //   console.log(this.dataSource1)
    // }else{
    //   this.dataSource1=undefined;
    //   this.flag=false;
    // }


    let filterValue1="";
    let filterValue2="";
    let filterValue3="";
    let filterValue4="";
    this.flag=true;
    if(this.forms.get("Name").value){
      filterValue1=this.forms.get("Name").value;
    }
    if(this.forms.get("Email").value){
      filterValue2=this.forms.get("Email").value;
    }
    if(this.forms.get("skill").value){
      filterValue3=this.forms.get("skill").value;
    }
    if(this.forms.get("trackName").value){
      filterValue4=this.forms.get("trackName").value;
    }

    if(filterValue3!=""){
      this.dataSource3.filter=filterValue3
      this.dataSource1=this.dataSource3
    }
    if(filterValue4!=""){
      this.dataSource4=this.dataSource1
      this.dataSource4.filter=filterValue4
      this.dataSource1=this.dataSource4
    }
    if(filterValue1!=""){
      this.dataSource5=this.dataSource1
      this.dataSource5.filter=filterValue1
      console.log(filterValue1)
      console.log(this.dataSource5)
      this.dataSource1=this.dataSource5
      
    }
    if(filterValue2!=""){
      
      
      this.dataSource2=this.dataSource1
      this.dataSource2.filter=filterValue2
      this.dataSource1=this.dataSource2
    }
      
  }





  EditCandidate(row:any){
    
    this.form.EmployeeID=row.EmployeeID;
    this.form.storageSub.next(row.EmployeeID);
    this.router.navigate(["candidate"]);
  }
  
}

