import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
declare var $: any;
@Component({
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage implements OnInit{
	constructor(private _router: Router, private _authService: AuthService){}
	errorMessage = "";
	loading = false;
	completeLogin = false;
	completeRegister = false;
	login_form = {
		username: '',
		password: '',
		remember_me: false
	};
	create_account_form = {
		username: '',
		email: '',
		password: '',
		password_confirm: ''
	};

	ngOnInit(){
		if(localStorage.getItem('user')){
			this._router.navigate(['home']);
		}
		$('#login-form-link').click(function(e) {
			$("#login-form").delay(100).fadeIn(100);
	 		$("#register-form").fadeOut(100);
			$('#register-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
		$('#register-form-link').click(function(e) {
			$("#register-form").delay(100).fadeIn(100);
	 		$("#login-form").fadeOut(100);
			$('#login-form-link').removeClass('active');
			$(this).addClass('active');
			e.preventDefault();
		});
	}

	checkLogin(){
		this.completeLogin = (this.login_form.username.length > 0 && this.login_form.password.length > 0) ? true : false;
	}

	checkRegister(){
		this.completeRegister = (this.create_account_form.username.length > 0 && this.create_account_form.email.length > 0 && this.create_account_form.password.length > 0 && this.create_account_form.password_confirm.length > 0) ? true : false;
	}
	login() {
		this.loading = true;
		if(this.login_form.password.length > 0 && this.login_form.username.length > 0){
			localStorage.removeItem('user');
			this._authService.login(this.login_form).subscribe(res => {
				if(res.status == 200){
					localStorage.setItem('user',JSON.stringify(res.user));
					this._router.navigate(['home']);
				} else {
					this.loading = false;
					this.errorMessage = res.error;
					setTimeout(() => {
						this.errorMessage = "";
					}, 4000);
				}
			});
		} else {
			this.loading = false;
			this.errorMessage = 'Missing email or password.';
			setTimeout(() => {
				this.errorMessage = "";
			}, 4000);

		}
	}

	register() {
		this.loading = true;
		let data = this.create_account_form;
		if(data.username.length > 0 
			&& data.email.length > 0 
			&& data.password.length > 0 
			&& (data.password_confirm.length > 0 
				&& data.password_confirm == data.password)
		) {
			this._authService.register(this.create_account_form).subscribe(res => {
				if(res.status == 200){
					localStorage.setItem('user',JSON.stringify(res.user));
					this._router.navigate(['home']);
				} else {
					this.loading = false;
					this.errorMessage = res.error;
					setTimeout(() => {
						this.errorMessage = "";
					}, 4000)
				}
			});
		} else {
			this.loading = false;
			this.errorMessage = "Please fill out all fields and make sure the password confirm input matches the password provided.";
			setTimeout(() => {
				this.errorMessage = "";
			}, 4000);
		}
	}	

	gotoForgotPassword(){
		this._router.navigate(['/forgotpassword']);
	}
}
