import './vendor';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App} from './app'

import {providers, routes} from './index';
import {MainComponent, RegisterComponent, NavComponent, HomeAuth,LoginComponent} from './Composents';
import {AuthPage} from "./Composents/loginRegister/authpage.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        // routing,
        HttpModule,
        routes,
    ],
    declarations: [
        MainComponent,
        RegisterComponent,
        LoginComponent,
        NavComponent,
        HomeAuth,
        AuthPage,
        App,

    ],
    providers,
    bootstrap: [App]
})
export class Main {}
platformBrowserDynamic().bootstrapModule(Main);
