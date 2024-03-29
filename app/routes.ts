import  { RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {MainComponent, RegisterComponent, HomeAuth, LoginComponent,Mail, AuthPage} from './Composents';
import { AuthService } from './Services';
import {EventsComponent} from "./Composents/events/eventsComponent";

export const routes: ModuleWithProviders = RouterModule.forRoot([

    {path: '', redirectTo: 'loginIn', pathMatch: 'full' },
    {path: 'loginIn', component: HomeAuth, canActivate:[AuthService]},
    {path: 'events', component: EventsComponent, canActivate:[AuthService]},
    {path: 'main-component', component: MainComponent},
    {path: 'mail', component: Mail},
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