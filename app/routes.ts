import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent, HomeAuth, LoginComponent} from './Composents';
import { LoggedInGuard } from './Services/login-in.guard';

export const routes: ModuleWithProviders = RouterModule.forRoot([

    {path: '', component: MainComponent},
    {path: 'loginIn', component: HomeAuth, canActivate:[LoggedInGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo:''}
]);