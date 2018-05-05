import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://localhost:3000/api/authenticate', { 'email': username, 'password': password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                //console.log(JSON.stringify(user));54z
                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    status() {
        // remove user from local storage to log user out
        return localStorage.getItem('currentUser');
    }

    register(model: any) {
        var headers = {
            'userid': model.email.value, 'name': model.name.value,
            'gender': model.gender.value,
            'dateofbirth': new Date(model.dateofbirth).toDateString(),
            'email': model.email.value,
            'mobile': model.mobile.value,
            'password': model.password.value,
            'thumbnailurl': '',
            'isauthorized': 'false'
        }
        return this.http.post<any>('http://localhost:3000/api/register', headers)
            .map((response: Response) => {
                return response;
            });
        //.catch(this.handleError);
    }
}