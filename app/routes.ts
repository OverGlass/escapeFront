import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent, HomeAuth, LoginComponent, AuthPage} from './Composents';
import { LoggedInGuard } from './Services/login-in.guard';

export const routes: ModuleWithProviders = RouterModule.forRoot([

    {path: '', redirectTo: 'main-component', pathMatch: 'full' },
    {path: 'loginIn', component: HomeAuth, canActivate:[LoggedInGuard]},
    {path: 'main-component', component: MainComponent},
    {
        path: 'auth',
        component: AuthPage,
        children :
            [
                {path: '', redirectTo: 'login', pathMatch: 'full' },
                {path: 'login', component: LoginComponent},
                {path: 'register', component: RegisterComponent}
            ]
    },

]);