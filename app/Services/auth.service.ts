import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
    private loggedIn = false;
    private _url = "http://localhost/escape/web/app_dev.php/login";
    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');

    }

    login(UserData) {
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
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                    // return console.log(this.loggedIn);
                    return true;
                } else {
                    return false;
                }

            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

