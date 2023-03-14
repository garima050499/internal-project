import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post("", data);
  }

  updateInterViewStatus(data: any): Observable<any> {
    return this._http.patch("", data);
  }
}
