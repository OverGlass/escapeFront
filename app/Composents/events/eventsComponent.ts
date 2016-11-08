import {Component, OnInit} from '@angular/core';
import {Animations, AuthService, EventService, GeolocationService} from '../../Services';
import {Router} from '@angular/router';
// import {User} from "../Services/TypeChecking/user";
// import {Observable} from 'rxjs/Rx';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'events',
    templateUrl: 'events.template.html',
    styles: [':host {z-index:100; width: 100%; display: block; position: absolute; }'],
    host: { '[@routeAnimation]': 'true' },
    animations:Animations.page,
})

export class EventsComponent implements OnInit{
    events={

    };
    pageId = "eventsPrivate";
    menuColor= "rgb(182,0,0)";
    // menuColor= "rgb(202,202,202)";
    route = "/main-component";
    latitude = "48.40111515151";
    longitude = "3.9444515";
    distance = "20";
    constructor(
        private authService : AuthService,
        private router : Router,
        private eventService : EventService,
        private geolocalisationService : GeolocationService,
    ){

    }
    ngOnInit(){
        this.getEvents(this.latitude, this.longitude, this.distance);
        // console.log(this.users);
    }

    getEvents(latitude, longitude,distance) {
        this.eventService.getEvents(latitude, longitude, distance)
            .subscribe(
                res => this.events = res);
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }



    onLogout(){
        this.authService.logout();
        this.router.navigate(['main-component']);
    }

}