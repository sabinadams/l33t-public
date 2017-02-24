import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
declare var $: any;
@Component({
  templateUrl: './forgotPassword.html',
  styleUrls: ['./forgotPassword.css']
})
export class ForgotPasswordPage implements OnInit{
	constructor(private _router: Router, private _authService: AuthService){}
	email = "";
	errorMessage = "";
	successMessage = "";
	loading = false;
	changePassForm = {
		newPass: "",
		newPassConfirm: "",
		code: ""
	};

	ngOnInit(){
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$("#login-form-link").addClass('active');
	}

	forgotPasswordEmail(){
		this.loading = true;
		this._authService.forgotPasswordEmail(this.email).subscribe(res => {
			if(res.status == 401){
				this.errorMessage = res.message;
				this.loading = false;
				setTimeout(() => {
					this.errorMessage = "";
				}, 4000);
			} else {
				this.successMessage = res.message;
				this.loading = false;
				setTimeout(() => {
					this.successMessage = "";
					this.email = "";
					this._router.navigate(['/verifycode']);
				}, 2000);	
			}
		});
	}
}
