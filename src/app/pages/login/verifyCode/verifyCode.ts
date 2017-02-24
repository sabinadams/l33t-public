import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth-service';
declare var $: any;
@Component({
  templateUrl: './verifyCode.html',
  styleUrls: ['./verifyCode.css']
})
export class VerifyCodePage implements OnInit{
	constructor(private _router: Router, private _authService: AuthService){}
	errorMessage = "";
	successMessage = "";
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

	changePass() {
		this._authService.forgotPasswordChangePassword(this.changePassForm).subscribe(res => {
			if(res.status == 200){
				this.successMessage = res.message;
				setTimeout(() => {
					this.successMessage = "";
					this._router.navigate(['']);
				}, 2000);
			} else {
				this.errorMessage = res.message;
				setTimeout(() => {
					this.errorMessage = "";
				}, 2000);
			}
		});
	}
}
