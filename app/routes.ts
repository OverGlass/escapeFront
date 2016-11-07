import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent, HomeAuth, LoginComponent, AuthPage,ComfirmEmail} from './Composents';
import { AuthService } from './Services';

export const routes: ModuleWithProviders = RouterModule.forRoot([

    {path: '', redirectTo: 'main-component', pathMatch: 'full' },
    {path: 'loginIn', component: HomeAuth, canActivate:[AuthService]},
    {path: 'main-component', component: MainComponent},
    {
        path: 'auth',
        component: AuthPage,
        children :
            [
                {path: '', redirectTo: 'login', pathMatch: 'full' },
                {path: 'register', component: RegisterComponent},
                {path: 'login', component: LoginComponent},
                {path: 'login/comfirmemail', component: ComfirmEmail},
            ]
    },

]);