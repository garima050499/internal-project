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

  requirement_form = new FormGroup({
    requirement: new FormControl("", [Validators.required]),
    track: new FormControl("", [Validators.required]),
  })

  getControl(name: any) : AbstractControl | null {
    return this.requirement_form.get(name);
  }

  addRequirement() {
    console.log(this.requirement_form.value)
  }

}
