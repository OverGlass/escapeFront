
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from "../../Services";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class LoginComponent {
    error =false;
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
                } else if(res.not == false) {
                    console.log('coucou');
                }else {
                    this.error =true;
                    console.log(JSON.stringify(this.user));

                }
            });
    }
}