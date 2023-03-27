import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CandidateDetailsComponent } from '../candidate-details/candidate-details.component';
import { candidateList } from '../data.type';
import { CandidateService } from '../services/candidate.service';


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  trackDetails: any;
  public data: any
  public showSpinner: boolean;

  public formName: any;
  public isUpdate: boolean = false;
  public CandidateDetails: candidateList;
  public employeeId: number;

  public candidate_form: FormGroup;
  constructor(private _candidateService: CandidateService, private route: Router) { }

  ngOnInit(): void {

    this.candidate_form = new FormGroup({

      employeeId: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      mobileNumber: new FormControl("", [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      jobTitle: new FormControl(""),
      techTrackId: new FormControl("",),
      grade: new FormControl(""),
      baseLocation: new FormControl(""),
      skill: new FormControl("", [Validators.required]),
      experience: new FormControl("", [Validators.required]),
      interviewStatus: new FormControl("",),
      createdBy: new FormControl("Admin"),
      projectId: new FormControl("",),
      accountName: new FormControl("",),
      interviewDate: new FormControl(""),
      remark: new FormControl(""),
      lwd: new FormControl(""),
      //interviewType: new FormControl("Client"),
      Panel: new FormControl(""),
      updatedBy: new FormControl("Dwarka"),
      updateComments: new FormControl("ABC"),
      employee_type: new FormControl()

    });
    // if(this._candidateService.EmployeeID!=undefined){
    //   this.showSpinner=true
    //   setTimeout(()=>{
    //     this.showSpinner=false;
    //   },5000)

    // }else{
    //   this.showSpinner=false;
    // }
    this.EditCandidate()

    // if(this.formData.employee_first_name){
    //   this.candidate_form.patchValue({
    //     employee_first_name:this.formData.employee_first_name
    //   })

    //console.log(this.candidate_form)


    // this.formName= this.candidate_form.get('name');
    // console.log(this.formData)
    // if(this.formData){
    //   this.candidate_form.patchValue(this.formData.formData.employee_first_name)
    // }

    // this._candidateService.getTrackDetails().subscribe((data: any) => {
    //   this.trackDetails = data;
    // })
  }
  // showSpinner(){
  //   this.spinner.show("ball-fussion")
  //   setTimeout(()=>{a
  //     this.spinner.hide();
  //   },5000)
  // }
  EditCandidate() {
    // this._candidateService.storageSub.subscribe((result1) => {
    //   console.log(result1)
    //   if (this._candidateService.EmployeeID != undefined) {
    //     this.isUpdate = true;
    //     this._candidateService.getCandidateDetailsById(result1).subscribe((result) => {
    //       debugger;
    //       if (result) {

    //         this.CandidateDetails = result;

    //         if (this.CandidateDetails.isInternal) {
    //           this.isCandidateType = true;
    //           console.log(this.CandidateDetails)
    //           this.candidate_form.patchValue({
    //             employee_first_name: this.CandidateDetails.FirstName,
    //             employee_last_name: this.CandidateDetails.LastName,
    //             employee_id: this.CandidateDetails.EmployeeID,
    //             employee_email: this.CandidateDetails.Email,
    //             employee_mobile_number: this.CandidateDetails.MobileNo,
    //             employee_job_title: this.CandidateDetails.JobTitle,
    //             employee_source: this.CandidateDetails.Source,
    //             employee_grade: this.CandidateDetails.Grade,
    //             employee_base_location: this.CandidateDetails.BaseLocation,
    //             employee_skill: this.CandidateDetails.Skill,
    //             employee_experience: this.CandidateDetails.Experience,
    //             employee_type: "internal"
    //           })
    //           this._candidateService.EmployeeID=undefined;
    //         } else {
    //           this.isCandidateType = false;
    //           this.candidate_form.patchValue({
    //             employee_first_name: this.CandidateDetails.FirstName,
    //             employee_last_name: this.CandidateDetails.LastName,
    //             employee_id:this.CandidateDetails.EmployeeID,
    //             employee_email: this.CandidateDetails.Email,
    //             employee_mobile_number: this.CandidateDetails.MobileNo,
    //             employee_job_title: this.CandidateDetails.JobTitle,
    //             employee_source: this.CandidateDetails.Source,
    //             employee_grade: this.CandidateDetails.Grade,
    //             employee_base_location: this.CandidateDetails.BaseLocation,
    //             employee_skill: this.CandidateDetails.Skill,
    //             employee_experience: this.CandidateDetails.Experience,
    //             employee_type: "external"
    //           })
    //           this._candidateService.EmployeeID = undefined;
    //         }


    //       }
    //     })




    //   } else {
    //     this.isUpdate = false;
    //   }

    // })

    if (this._candidateService.EmployeeID != undefined) {
      this.isUpdate = true;
      this._candidateService.getCandidateDetailsById().subscribe((result) => {
        if (result) {

          this.CandidateDetails = result;

          if (this.CandidateDetails.isInternal) {
            this.isCandidateType = true;

            this.candidate_form.setValue({
              firstName: this.CandidateDetails.FirstName,
              lastName: this.CandidateDetails.LastName,
              employeeId: this.CandidateDetails.EmployeeID,
              email: this.CandidateDetails.Email,
              mobileNumber: this.CandidateDetails.MobileNo,
              jobTitle: this.CandidateDetails.JobTitle,
              techTrackId:"",
              grade: this.CandidateDetails.Grade,
              baseLocation: this.CandidateDetails.BaseLocation,
              skill: this.CandidateDetails.Skill,
              experience: this.CandidateDetails.Experience,
              interviewStatus:"",
              createdBy:"",
              projectId:"",
              accountName:"",
              interviewDate:"",
              remark:"",
              lwd:"",
              //interViewType:"",
              Panel:"",
              updatedBy:"",
              updateComments:"",
              employee_type: "internal"
            })
            // this._candidateService.EmployeeID=undefined;
          } else {
            this.isCandidateType = false;
            this.candidate_form.patchValue({
              firstName: this.CandidateDetails.FirstName,
              lastName: this.CandidateDetails.LastName,
              employeeId: " ",
              email: this.CandidateDetails.Email,
              mobileNumber: this.CandidateDetails.MobileNo,
              jobTitle: this.CandidateDetails.JobTitle,
              techTrackId:"",
              grade: this.CandidateDetails.Grade,
              baseLocation: this.CandidateDetails.BaseLocation,
              skill: this.CandidateDetails.Skill,
              experience: this.CandidateDetails.Experience,
              interviewStatus:"",
              createdBy:"",
              projectId:"",
              accountName:"",
              interviewDate:"",
              remark:"",
              lwd:"",
              //interViewType:"",
              Panel:"",
              updatedBy:"",
              updateComments:"",
              employee_type: "internal"
            })
            this._candidateService.EmployeeID = undefined;
          }


        }
      })
    } else {
      this.isUpdate = false;
    }

  }
  updateCandidateById() {
    if (this.CandidateDetails.isInternal) {
      this.data = this.CandidateDetails

      this.data.EmployeeID = this.candidate_form.value["employeeId"]
      this.data.FirstName = this.candidate_form.value['firstName']
      this.data.LastName = this.candidate_form.value['lastName']
      this.data.Email = this.candidate_form.value['email']
      this.data.MobileNo = this.candidate_form.value['mobileNumber']
      this.data.JobTitle = this.candidate_form.value['jobTitle']
      this.data.Grade = this.candidate_form.value['grade']
      this.data.BaseLocation = this.candidate_form.value['baseLocation']
      this.data.Skill = this.candidate_form.value['skill']
      this.data.Experience = this.candidate_form.value['experience']
      this.data.Status = this.candidate_form.value['status']
      this.data.InterViewDate = this.candidate_form.value['interviewDate']
      this.data.Remarks = this.candidate_form.value['remark']
      this.data.LWD = this.candidate_form.value['lwd']
      this.data.isInternal = this.candidate_form.value['employee_type']

    }


    this._candidateService.updateCandidateById(this.data).subscribe((result) => {
      if (result) {
        console.log("Updated")
        this._candidateService.updateNavigation=true;
        this.route.navigate(['details'])
      }

    })
  }
  getControl(name: any): AbstractControl | null {

    return this.candidate_form.get(name);
  }
  isValid(){
    if(this.candidate_form.status !== 'INVALID'){
      return true;
    }else{
      return false;
    }
  }
  addEmployee() {
    console.log(this.candidate_form.value)
    this._candidateService.addEmployee(this.candidate_form.value).subscribe({
      next: (val: any) => {
        alert("Candidate Added Sucessfully");
        //console.log(val);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  isCandidateType: boolean;
  selectCandidateType(event) {
    console.log(event.target.value)
    let selected = event.target.value;
    if (selected == 'internal') {
      this.isCandidateType = true;
    } else {
      this.isCandidateType = false;
    }
  }
}
