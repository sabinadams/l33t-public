import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http, private _router: Router) {}

  login(data){
  	return this.http.post('http://localhost:3000/login', data).map((res:Response) => {
       return res.json();
     })
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  register(data){
  	return this.http.post('http://localhost:3000/register', data).map((res:Response) => {
        return res.json();
    });
  }

  forgotPasswordEmail(email){
    return this.http.post('http://localhost:3000/forgotpasswordemail', { email: email }).map((res:Response) => {
        return res.json();
    });
  }

  forgotPasswordChangePassword(data){
    return this.http.post('http://localhost:3000/forgotpasschangepass', { data: data }).map((res:Response) => {
        return res.json();
    });
  }
}