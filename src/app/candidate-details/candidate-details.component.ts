import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateComponent } from '../candidate/candidate.component';
import { candidateList } from '../data.type';
import { CandidateService } from '../services/candidate.service';
import { ChartDataService } from '../services/chart-data.service';


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
    
    if(this.udatedCandidate.isUpdate){
      console.log("jhdfcgewfcjewfcjwe")
      this.form.getCandidateDetailsById().subscribe((result)=>{
        if(result){
          this.updatedCandidate = result;
          this.dataSource2.filter=this.updatedCandidate.FirstName
        }
      })
    }else{
      this.chartData.candidateList().subscribe((result)=>{
        if(result){
          this.CandidateList = result;
          this.dataSource2=new MatTableDataSource<candidateList>(this.CandidateList);
        }
      }) 
    }
   
  }
  FilterCandidate(){
    let filterValue="";
    let flag=0;
    //console.log(this.forms);
    if(this.forms.get("Name").value){
      filterValue=this.forms.get("Name").value
      flag=1;
    }else if(this.forms.get("Email").value){
      filterValue=this.forms.get("Email").value
      flag=1;
    }else if(this.forms.get("skill").value){
      filterValue=this.forms.get("skill").value
      flag=1;
    }else if(this.forms.get("trackName").value){
      filterValue=this.forms.get("trackName").value
      flag=1;
    }else{
      flag=0;
    }

    
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    if(filterValue!=""){
      this.dataSource2.filter = filterValue;
      this.flag=true;
      this.dataSource1=this.dataSource2;
    }else{
      this.dataSource1=undefined;
      this.flag=false;
    }
      
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

