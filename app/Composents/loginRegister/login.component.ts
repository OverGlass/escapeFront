
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from "../../Services";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class LoginComponent {
    error ='';
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    user = {
        login: '',
        password:'',
    };


    login() {
        // this.loading = true;
        this.authService.login(this.user)
            .subscribe(res => {
                if (res) {
                    this.router.navigate(['loginIn']);
                } else {
                    console.log(this.error = 'Username or password is incorrect');
                    console.log(JSON.stringify(this.user));

                }
            });
    }
}