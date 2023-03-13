import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CIRejected, jobTracks} from '../data.type';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  public ind:string;

  constructor(private http:HttpClient) { }
  jobTrackList(){
    return this.http.get<jobTracks[]>('http://localhost:3000/jobTracks')
  }
  CIList(listname:string){
    return this.http.get<CIRejected[]>(`http://localhost:3000/${listname}`)
  }
}
