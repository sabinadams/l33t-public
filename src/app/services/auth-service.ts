import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { HttpClient } from './http-service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http, private _router: Router, private _httpClient: HttpClient) {}

  login(data){
  	return this.http.post('http://localhost:3000/login', data).map((res:Response) => {
       return res.json();
     })
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  register(data){
  	console.log('Registering...', data);
  }
}