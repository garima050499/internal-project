import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

import {candidateList, CIRejected, jobTracks} from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private _http: HttpClient) { }
  public formdata:any;
  public EmployeeID:number;
  public updateNavigation:boolean;
  public storageSub= new Subject<number>();
  addEmployee(data: any): Observable<any> {
    return this._http.post("http://localhost:3000/candidateDetails/", data);
  }

  getCandidateList(): Observable<any> {
    return this._http.get("");
  }

  getTrackDetails(): Observable<any> {
    return this._http.get("");
  }
  getCandidateDetailsById(){
    return this._http.get<candidateList>('http://localhost:3000/candidateDetails/'+this.EmployeeID)
  }
  updateCandidateById(data){
    return this._http.put<candidateList>(`http://localhost:3000/candidateDetails/${this.EmployeeID}`,data)
  }
}
