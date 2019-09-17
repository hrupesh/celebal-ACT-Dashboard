import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})

export class VedantaService {

  apiUrl="https://vedantaapi.azurewebsites.net";

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    var body = {"Date":"18-08-2019"}
    const url = this.apiUrl + '/inbounddesktop/Inbound/';
    return this.http.post<any>(url,body,httpOptions);
  }
  
  getC(detail:any):Observable<any>{
    const url = this.apiUrl +'/inbounddesktop/calender';
    return this.http.post<any>(url,detail,httpOptions);
  
  }
}
