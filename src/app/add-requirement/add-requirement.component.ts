import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { projectTable,TechnicalTrack } from '../data.type';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-add-requirement',
  templateUrl: './add-requirement.component.html',
  styleUrls: ['./add-requirement.component.css']
})
export class AddRequirementComponent implements OnInit {
  public requirement_form:FormGroup
  public isUpdate:boolean=false;
  public projectList:projectTable[];
  public trackNameList:TechnicalTrack[];
  constructor(private projectService:ProjectService) { }


  

  ngOnInit(): void {
    this.requirement_form = new FormGroup({

      requirement: new FormControl("", [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
      TrackId: new FormControl("",[Validators.required]),
      projectId: new FormControl("",[Validators.required]),
      createDate:new FormControl(formatDate (new Date (), "dd-MM-yyyy", "en"))
    });

    this.getprojectIdList();
    this.getTrackNameList();




  }
  getControl(name: any): AbstractControl | null {

    return this.requirement_form.get(name);
  }
  isValid(){
    if(this.requirement_form.status !== 'INVALID'){
      return true;
    }else{
      return false;
    }
  }
  addRequirement(){
    //let pid=parseInt(this.requirement_form["TrackId"].value)
    this.requirement_form.setValue({
      "requirement":this.requirement_form.get("requirement").value,
      "TrackId":parseInt(this.requirement_form.get("TrackId").value),
      "projectId":parseInt(this.requirement_form.get("projectId").value),
      "createDate":this.requirement_form.get("createDate").value
    })
    //console.log(this.requirement_form.value)
    this.projectService.addRequirement(this.requirement_form.value).subscribe((result)=>{
      console.log("Added !!!")
    })
  }
  updateRequirementById(){

  }
  getprojectIdList(){
    this.projectService.getAllProjectList().subscribe((result)=>{
      this.projectList=result
    })
  }

  getTrackNameList(){
    this.projectService.getAllTechnicalTrackList().subscribe((result)=>{
      this.trackNameList=result
    })
  }
}
