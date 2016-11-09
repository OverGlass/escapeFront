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
    events;
    pageId = "eventsPrivate";
    // menuColor= "rgb(182,0,0)";
    menuColor = "rgb(222,61,61)";
    // menuColor= "rgb(202,202,202)";
    route = "/main-component";
    // eventLat=this.events;
    // eventLng=this.events;
    coord= [];
    latitude;
    longitude;
    distance = "0.5";

    constructor(
        private authService : AuthService,
        private router : Router,
        private eventService : EventService,
        private geo : GeolocationService,
    ){

    }


    ngOnInit(){

        this.geo.getLocation().subscribe(

            // lat => {this.latitude = lat.coords.latitude},
            lat => {
                this.latitude = lat.coords.latitude;
                this.longitude = lat.coords.longitude;
                this.getEvents(this.latitude, this.longitude, this.distance);

            },
            // (lnglat) => {this.coord = (lnglat)},
            // (res) => {console.log((res))},
        );



        // this.latitude = this.coord.coords.latitude;
        // this.longitude = this.coord.coords.longitude;






    }



    getEvents(latitude, longitude,distance) {
        this.eventService.getEvents(latitude, longitude, distance)
            .subscribe(
                res => this.events = res);
                // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }








}