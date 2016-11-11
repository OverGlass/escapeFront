import './vendor';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App} from './app'

import {providers, routes} from './index';
import {MainComponent, RegisterComponent, pageTransition, Search, HomeAuth,LoginComponent,EventsComponent, EventCreator} from './Composents';
import {AuthPage} from "./Composents/loginRegister/authpage.component";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {EventTab} from "./Composents/events/ui/event-tab";
import {EventMap} from "./Composents/events/ui/event-map";


import { AgmCoreModule } from 'angular2-google-maps/core';




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        // routing,
        HttpModule,
        routes,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB8VaTW0r1Fmz2RoKuqKCcZkPO9jacDTDo'
        })


    ],
    declarations: [
        MainComponent,
        RegisterComponent,
        LoginComponent,
        HomeAuth,
        AuthPage,
        App,
        pageTransition,
        EventsComponent,
        EventTab,
        EventMap,
        EventCreator,
        Search


    ],
    providers:[
        providers,
        {provide: LocationStrategy, useClass: HashLocationStrategy}

    ],
    bootstrap: [App]
})
export class Main {}
platformBrowserDynamic().bootstrapModule(Main, []);
