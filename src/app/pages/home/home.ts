import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit{

	constructor(private _router: Router){}
	user = JSON.parse(localStorage.getItem('user'));
	ngOnInit(){}

	logout(){
		localStorage.removeItem('user');
		this._router.navigate(['']);
	}
}
	