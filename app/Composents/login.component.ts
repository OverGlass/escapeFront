
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from "../Services";

@Component({
    selector: 'login',
    templateUrl: 'login.template.html'
})
export class LoginComponent {
    constructor(
        private userService: AuthService,
        private router: Router
    ) {}

    user = {
        email: '',
        password:'',

    };

    onLogin() {
        this.userService.login(this.user).subscribe((result) => {
            if (result) {
                this.router.navigate(['']);
            }
        });
    }
}