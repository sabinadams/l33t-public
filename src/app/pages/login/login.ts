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


	login() {
		if(this.login_form.password.length > 0 && this.login_form.username.length > 0){
			localStorage.removeItem('user');
			this._authService.login(this.login_form).subscribe(res => {
				if(res.status == 200){
					alert(`Successful Login. Assigned the token: ${res.user.token}`);
					localStorage.setItem('user',JSON.stringify(res.user));
					this._router.navigate(['home']);
				} else {
					this.errorMessage = res.error;
					setTimeout(() => {
						this.errorMessage = "";
					}, 4000)
				}
			});
		} else {
			this.errorMessage = 'Missing email or password.';
			setTimeout(() => {
				this.errorMessage = "";
			}, 4000)
		}
	}	
}
