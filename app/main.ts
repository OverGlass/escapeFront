import './vendor';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {providers} from './index';
import {AppComponent, RegisterComponent} from './Composents/index.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        // routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RegisterComponent
    ],
    providers,
    bootstrap: [AppComponent]
})
export class Main {}
platformBrowserDynamic().bootstrapModule(Main);
