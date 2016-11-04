import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private user: AuthService) {}

    canActivate() {
        return this.user.isLoggedIn();
    }
}