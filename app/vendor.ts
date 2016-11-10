//Stuff
import 'es6-shim';
import 'es6-promise';
import 'zone.js/dist/zone';
import 'reflect-metadata';
// DATA PICKER
import 'ng2-auto-complete';
// Angular 2
import '@angular/platform-browser-dynamic';
import '@angular/platform-browser';
import '@angular/compiler';
import '@angular/common';
import '@angular/core';
import '@angular/http';
import '@angular/router';
import {enableProdMode} from '@angular/core';

// Google Maps
import 'angular2-google-maps/core';

// RxJS 5
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';
import 'rxjs/Rx';




const production = 'production';
if (production === 'BRUNCH_ENVIRONMENT') {
    enableProdMode();
}