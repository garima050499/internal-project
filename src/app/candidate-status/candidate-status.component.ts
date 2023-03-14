import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/candidate.service';


@Component({
  selector: 'app-candidate-status',
  templateUrl: './candidate-status.component.html',
  styleUrls: ['./candidate-status.component.css']
})
export class CandidateStatusComponent implements OnInit {

  constructor(private _candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  candidate_status_form = new FormGroup({
    employee_name: new FormControl("", [Validators.required]),
    employee_track: new FormControl("", [Validators.required]),
    panel: new FormControl("", [Validators.required]),
    employee_status: new FormControl("", [Validators.required]),
    remarks: new FormControl("", [Validators.required]),
  })

  getControl(name: any) : AbstractControl | null {
    return this.candidate_status_form.get(name);
  }

  updateInterviewStatus() {
    this._candidateService.updateInterViewStatus(this.candidate_status_form.value).subscribe({
      next:(val: any) => {
        alert("Candidate status updated sucessfully");
        console.log(val);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

}
