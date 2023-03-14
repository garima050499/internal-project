import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadershipviewService {
data :any;
  constructor(private httpClient:HttpClient) { }
  public getLeadershipview(){
    var url= "https://localhost:7240/api/Employee";
    
      var ans= this.httpClient.get(url);
      console.log(ans);
      return ans;
  }
}
