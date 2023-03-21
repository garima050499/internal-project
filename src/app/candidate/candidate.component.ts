import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  trackDetails: any;

  constructor(private _candidateService: CandidateService) { }

  ngOnInit(): void {
    // this._candidateService.getTrackDetails().subscribe((data: any) => {
    //   this.trackDetails = data;
    // })
  }

  candidate_form = new FormGroup({
    employee_id: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
    employee_first_name: new FormControl("", [Validators.required]),
    employee_last_name: new FormControl("", [Validators.required]),
    employee_email: new FormControl("", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    employee_mobile_number: new FormControl("", [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
    employee_job_title: new FormControl(""),
    employee_source: new FormControl(""),
    employee_grade: new FormControl(""),
    employee_base_location: new FormControl(""),
    employee_skill: new FormControl("", [Validators.required]),
    employee_experience: new FormControl("", [Validators.required]), 
  });

  getControl(name: any) : AbstractControl | null {
    return this.candidate_form.get(name);
  }
  addEmployee() {
    console.log(this.candidate_form.value)
    this._candidateService.addEmployee(this.candidate_form.value).subscribe({
      next:(val: any) => {
        alert("Candidate Added Sucessfully");
        console.log(val);
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
    if(selected == 'internal') {
      this.isCandidateType = true;
    }else {
      this.isCandidateType = false;
    }
  }
}
