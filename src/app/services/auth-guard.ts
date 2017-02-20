import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate() {
        if (1 == 1) {
            return true;
        }
        this._router.navigate(['']);
        return false;
    }
}