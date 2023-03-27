import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateComponent } from '../candidate/candidate.component';
import { candidateList } from '../data.type';
import { CandidateService } from '../services/candidate.service';
import { ChartDataService } from '../services/chart-data.service';
import { filter } from 'rxjs';
import { threadId } from 'worker_threads';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

interface ITableFilter {
  column: string;
  value: any;
}

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})





export class CandidateDetailsComponent implements OnInit {
  displayedColumns = ["FirstName","LastName","Email","TrackName","Experience","Skill"];
  dataSource1:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  dataSource2:MatTableDataSource<candidateList>=new MatTableDataSource<candidateList>();
  public flag=false;
  public action="Action";
  public formData:any|undefined;
  public rowData:any;
  public updatedCandidate:candidateList;
  candidateFilters: any=[];
  filterDictionary= new Map<string,string>();
 // public employee_first_name:string;
  public employeeId:number;
  // applyFilter(event:Event) {
  //   let filterValue = (event.target as HTMLInputElement).value;
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   if(filterValue!=""){
  //     this.dataSource2.filter = filterValue;
      
  //     this.flag=true;
  //   this.dataSource1=this.dataSource2;
  //   }else{
  //     this.dataSource1=undefined;
  //     this.flag=false;
  //   }
    
  // }

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
        this.CandidateList = result;
        this.dataSource2=new MatTableDataSource<candidateList>(this.CandidateList);
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




    

    // let filterObj: { FirstName:string,Email: String,Skill:string,TrackName:string}={FirstName:null,Email:null,Skill:null,TrackName:null};

    // filterObj.FirstName=this.forms.get("Name").value;
    // filterObj.Email=this.forms.get("Email").value;
    // filterObj.Skill=this.forms.get("skill").value;
    // filterObj.TrackName=this.forms.get("trackName").value;
    // this.flag=true;
    // console.log(filterObj)
    // let f=JSON.stringify(filterObj);
    // let m=["swati","swati@gmail.com",".net","java"]
    // console.log(m)
    // this.dataSource2.filter = "swati";
    // console.log(this.dataSource2);
    // this.dataSource1=this.dataSource2

    // let filterValue="";
    // let flag=0;
    // //console.log(this.forms);
    // if(this.forms.get("Name").value){
    //   console.log(this.forms.get("Name").value)
    //   filterValue=this.forms.get("Name").value
    //   flag=1;
    // }else if(this.forms.get("Email").value){
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

    // let filterValue=(this.forms.get("Email").value).trim();
    // filterValue=filterValue.toLowerCase();
    // console.log(filterValue)
    // // let filterValue1=(this.forms.get("Email").value).trim().toLowerCase();
    // // let filterValue2=(this.forms.get("skill").value).trim().toLowerCase();
    // // let filterValue3=(this.forms.get("trackName").value).trim().toLowerCase();
    // this.dataSource2.filter = filterValue;
    // console.log(this.dataSource2)
    // // this.dataSource2.filter = filterValue1;
    // // this.dataSource2.filter = filterValue2;
    // // this.dataSource2.filter = filterValue3;
    // this.dataSource1=this.dataSource2;
    // console.log(this.dataSource1)

    // let filterValue1="";
    // let filterValue2="";
    // let filterValue3="";
    // let filterValue4="";
    // if(this.forms.get("Name").value){
    //   filterValue1=this.forms.get("Name").value;
    // }
    // if(this.forms.get("Email").value){
    //   filterValue2=this.forms.get("Email").value;
    // }
    // if(this.forms.get("skill").value){
    //   filterValue3=this.forms.get("skill").value;
    // }
    // if(this.forms.get("trackName").value){
    //   filterValue4=this.forms.get("trackName").value;
    // }

    // console.log(filterValue1)
    // console.log(filterValue2)
    // console.log(filterValue3)
    // console.log(filterValue4)

  //   let filterVal=[filterValue1,filterValue2,filterValue3,filterValue4]

  //   this.dataSource2.filterPredicate=(data: String, filter: string) => {
  //     return data.includes(filter);
  // };


  // let filterObj=[
  //   {id:"FirstName",value:this.forms.get("Name").value},
  //   {id:"Email",value:this.forms.get("Email").value},
  //   {id:"skill",value:this.forms.get("skill").value},
  //   {id:"trackName",value:this.forms.get("trackName").value}
  // ];
  // this.dataSource2.filter = JSON.stringify(filterObj);

  // console.log(this.dataSource2)
    

    // if(filterValue1!="" && filterValue2!="" && filterValue3!="" && filterValue4!=""){
    //   this.flag=true;
    //   filterValue1=filterValue1.trim().toLowerCase();
    //   filterValue2=filterValue2.trim().toLowerCase();
    //   filterValue3=filterValue3.trim().toLowerCase();
    //   filterValue4=filterValue4.trim().toLowerCase();
    //   const filterObj = { 
    //     filterValue11: filterValue1,
    //     filterValue21: filterValue2,
    //     filterValue31: filterValue3,
    //     filterValue41:filterValue4
    // };

    // console.log(JSON.stringify(filterObj))

    // this.dataSource2.filter = JSON.stringify(filterObj);
    // console.log(this.dataSource2)
    //   // this.dataSource2.filter=filterValue1;
    //   // this.dataSource2=this.dataSource2;
    //   // console.log("vvr",this.dataSource2)
      
    //   // this.dataSource2.filter=filterValue3;
    //   // this.dataSource2=this.dataSource2;
    //   // console.log(this.dataSource2)
    //   // this.dataSource2.filter=filterValue4;
    //   // this.dataSource2=this.dataSource2;
    //   // console.log(this.dataSource2)

    //   this.dataSource1=this.dataSource2;
    //   console.log(this.dataSource1)
    // }

    // this.flag=true;
    //   this.dataSource2.filter=this.forms.value;
    //   console.log(this.dataSource2);
    //   this.dataSource1=this.dataSource2


      
  }

  applyFilter(ob:any,empfilter:candidateList) {

    this.filterDictionary.set(empfilter.FirstName,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    
    this.dataSource2.filter = jsonString;
    this.flag=true;
    this.dataSource1=this.dataSource2
    //console.log(this.filterValues);
  }


  EditCandidate(row:any){
    
    this.form.EmployeeID=row.EmployeeID;
    this.form.storageSub.next(row.EmployeeID);
    //this.form.formdata=row;

   
    // this.cnadidateForm.candidate_form.patchValue({
    //   employee_first_name: row.FirstName,
    //   employee_last_name:row.LastName,
    //   employee_id:row.EmployeeID,
    //   employee_email:row.Email,
    //   employee_mobile_number: row.MobileNo,
    //   employee_job_title: row.JobTitle,
    //   employee_source: row.Source,
    //   employee_grade: row.Grade,
    //   employee_base_location: row.BaseLocation,
    //   employee_skill: row.Skill,
    //   employee_experience: row.Experience

    // })
    // this.form.formdata=this.cnadidateForm.candidate_form;
    
    this.router.navigate(["candidate"]);
  }
  
}

