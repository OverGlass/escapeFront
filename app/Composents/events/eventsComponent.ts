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
    allEvents;
    nearEvent=[];
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
    distance = "10000";

    constructor(
        private authService : AuthService,
        private router : Router,
        private eventService : EventService,
        private geo : GeolocationService,
    ){

    }


    ngOnInit(){
        this.getEventNear();

    }
    // getEventNear(){
    //     this.geo.getLocation().subscribe(
    //
    //         // lat => {this.latitude = lat.coords.latitude},
    //         lat => {
    //             this.latitude = lat.coords.latitude;
    //             this.longitude = lat.coords.longitude;
    //             this.getAllEvents(this.latitude, this.longitude, this.distance);
    //             console.log(this.nearEvent);
    //
    //         },
    //         // (lnglat) => {this.coord = (lnglat)},
    //         // (res) => {console.log((res))},
    //     );
    // }

    getEventNear(){
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
    }

    getEvents(latitude, longitude,distance) {
        this.eventService.getEvents(latitude, longitude, distance)
            .subscribe(
                res => {this.events = res; console.log(res)});
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }


    // triEvents(){

    // }
    // getAllEvents(latitude, longitude,distance){
    //     this.eventService.getAllEvents()
    //         .subscribe(
    //             events => {
    //                 this.allEvents = events;
    //                 console.log(this.allEvents);
    //                 console.log('HEY !!');
    //                 var r_earth = 6378;
    //                 var Latitude = latitude +(distance / r_earth) * (180 / Math.PI);
    //                 var LatitudeOp = latitude +(-distance / r_earth) * (180 / Math.PI);
    //                 var Longitude =
    //                     longitude +(distance / r_earth) * (180 / Math.PI)
    //                     / Math.cos(latitude * Math.PI / 180);
    //                 var LongitudeOp =
    //                     longitude +(-distance / r_earth) * (180 / Math.PI)
    //                     / Math.cos(latitude * Math.PI / 180);
    //
    //
    //
    //                 for (var i=0; i < this.allEvents.length; i++){
    //
    //                     if(
    //                         this.allEvents[i].villeLatitude < Latitude &&
    //                         this.allEvents[i].villeLatitude > LatitudeOp &&
    //                         this.allEvents[i].villeLongitude < Longitude &&
    //                         this.allEvents[i].villeLongitude > LongitudeOp
    //                     ){
    //                         this.nearEvent = [];
    //                         this.nearEvent.push(this.allEvents[i]);
    //                         console.log(this.nearEvent);
    //
    //                     }
    //
    //
    //                 }
    //
    //             });
    //
    // }











}