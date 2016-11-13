import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CanActivate, Router} from '@angular/router';
import {Login} from "./TypeChecking/login";

@Injectable()
export class AuthService implements CanActivate{

    private loggedIn = false;

    //LOCAL
    private _url = "https://localhost/escape/web/app_dev.php/api/login";

    //ONLINE
    // private _url = "https://escape.elpacha.fr/api/web/app_dev.php/api/login";


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
            this.router.navigate(['main-component']);
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
                if (res.token && res.validate) {
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
        //wallah
        localStorage.removeItem('id');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

