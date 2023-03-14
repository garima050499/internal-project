import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  candidate_form = new FormGroup({
    employee_id: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("^[0-9]*$")]),
    employee_name: new FormControl("", [Validators.required]),
    employee_track: new FormControl("", [Validators.required]),
    employee_job_title: new FormControl("",[Validators.required]),
    employee_grade: new FormControl("", [Validators.required]),
    employee_base_location: new FormControl("", [Validators.required]),
    employee_skill: new FormControl("", [Validators.required]),
    employee_experience: new FormControl("", [Validators.required]), 
  });

  getControl(name: any) : AbstractControl | null {
    return this.candidate_form.get(name);
  }
  addEmployee() {
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
}
