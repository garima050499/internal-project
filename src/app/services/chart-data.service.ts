import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {candidateList, CIRejected, jobTracks} from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  public ind:string;
  public trackname:string;
  public CIRejectedFormEditData:CIRejected

  constructor(private http:HttpClient) { }
  jobTrackList(){
    return this.http.get<jobTracks[]>('http://localhost:3000/jobTracks')
  }
  candidateList(){
    return this.http.get<candidateList[]>('http://localhost:3000/candidateDetails')
  }

  CIList(listname:string){
    return this.http.get<CIRejected[]>(`http://localhost:3000/${listname}`)
  }
  editCIList(data:CIRejected){
    let id = data.id;
    return this.http.put<CIRejected>(`http://localhost:3000/${this.ind}/`+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  addCIList(data:CIRejected){
    return this.http.post<CIRejected>(`http://localhost:3000/${this.ind}/`,data)
  }
}
