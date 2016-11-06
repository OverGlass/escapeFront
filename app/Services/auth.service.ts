import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CanActivate, Router} from '@angular/router';
import {Login} from "./TypeChecking/login";

@Injectable()
export class AuthService implements CanActivate{

    private loggedIn = false;
    private _url = "http://localhost/escape/web/app_dev.php/login";


    constructor(
        private http: Http,
        private router: Router
    ) {
        this.loggedIn = !!localStorage.getItem('currentUser');

    }

    // Si pas login restriction accées au pages

    isAuthorized() {
        return this.loggedIn;
    }

    canActivate(){
        const canActivate = this.isAuthorized();
        this.onCanActivate(canActivate);
        return canActivate;
    }

    onCanActivate(canActivate){
        if (!canActivate){
            this.router.navigate(['auth']);
        }
    }

    login(UserData: Login) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
                this._url,
                JSON.stringify(UserData),
                { headers }
            )

            .map(res => res.json())
            .map((res) => {
                if (res.token) {
                    // localStorage.setItem('auth_token', res.token);
                    localStorage.setItem('id', res.id);
                    localStorage.setItem('currentUser', res.token );
                    // console.log(res.token);
                    this.loggedIn = true;
                    return true;
                } else {
                    return false;
                }

            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('id');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

