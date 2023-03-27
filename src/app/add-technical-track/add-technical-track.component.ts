import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { projectTable } from '../data.type';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-technical-track',
  templateUrl: './add-technical-track.component.html',
  styleUrls: ['./add-technical-track.component.css']
})
export class AddTechnicalTrackComponent implements OnInit {

  public isUpdate:boolean=false;
  public projectList:projectTable[];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getprojectIdList();
  }
  technical_track_form = new FormGroup({

    Name: new FormControl("", [Validators.required]),
    projectId: new FormControl("",),
    createDate:new FormControl(formatDate (new Date (), "dd-MM-yyyy", "en")),

  })




  getControl(name: any): AbstractControl | null {

    return this.technical_track_form.get(name);

  }

  getprojectIdList(){
    this.projectService.getAllProjectList().subscribe((result)=>{
      this.projectList=result
    })
  }





  addTechnicalTrack() {
    this.technical_track_form.setValue({
      "Name":this.technical_track_form.get("Name").value,
      "projectId":parseInt(this.technical_track_form.get("projectId").value),
      "createDate":this.technical_track_form.get("createDate").value
    })
    //console.log(this.technical_track_form.value)
    this.projectService.addTechnicalTrack(this.technical_track_form.value).subscribe((result)=>{
      console.log("Added !!!")
    })

    console.log(this.technical_track_form.value)

  }
}
