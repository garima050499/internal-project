import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { projectTable, TechnicalTrack } from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllProjectList(){
    return this.http.get<projectTable[]>("http://localhost:3000/Project");
  }
  getAllTechnicalTrackList(){
    return this.http.get<TechnicalTrack[]>("http://localhost:3000/TechnicalTrack");
  }
  addRequirement(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/Requirements",data)
  }
  addTechnicalTrack(data:any){
    console.log(data)
    return this.http.post("http://localhost:3000/TechnicalTrack",data)
  }
  updateRequirementById(data:any){
    return this.http.put("http://localhost:3000/Requirements/"+data.id,data)
  }
}
