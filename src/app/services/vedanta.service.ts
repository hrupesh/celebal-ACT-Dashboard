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

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    var body = {"Date":"18-08-2019"}
    const url = "https://vedantaapi.azurewebsites.net/inboundDesktop/Inbound/";
    return this.http.post<any>(url,body,httpOptions);
  }
}
