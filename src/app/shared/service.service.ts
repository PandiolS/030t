import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  public getData(): Observable<HttpResponse<any>> {
    const url = `https://raw.githubusercontent.com/PandiolS/jsonFiles/master/testD.json`;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }

  public getMapData(): Observable<HttpResponse<any>> {
    const url = `https://raw.githubusercontent.com/PandiolS/jsonFiles/master/map_data`;
    return this.http.get(url, { observe: 'response', responseType: 'text' });
  }
}
