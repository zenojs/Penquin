import { RequestOptionsArgs } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DATA } from '../mock-data';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Product } from '../product';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Promise<any> {
    return Promise.resolve(DATA)
  }

  getRemoteData(url): Observable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPartnersData(): Observable<any> {
    let currentUser = localStorage.getItem('currentUser');
    console.log(currentUser);

    return this.http.post<any>('http://localhost:3000/api/getallusers', { 'x-access-token': currentUser })
      .map(user => {
        console.log(JSON.stringify(user));
        return user;
      }).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}