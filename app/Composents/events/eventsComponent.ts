import {Component, OnInit} from '@angular/core';
import {Animations, AuthService, EventService, GeolocationService} from '../../Services';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";
import {filter} from "rxjs/operator/filter";
import {UserService} from "../../Services/user.service";
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
menuName ='Accueil';

    // SEARCH

    queryEvent;
    filteredList=[];
    nomsSport=[];




    events;

    eventContent=[];
    allEvents;
    nearEvent=[];
    pageId = "eventsPrivate";
    // menuColor= "rgb(182,0,0)";
    menuColor = "rgb(222,61,61)";
    // menuColor= "rgb(202,202,202)";
    route = "/loginIn";
    // eventLat=this.events;
    // eventLng=this.events;
    coord= [];
    latitude;
    longitude;
    distance = "10000";

    eventSubscribe;

    sub = [];

    resa2:number = 0;


    alreadyRes2=false;
    private userID = localStorage.getItem('id');

    constructor(
        private authService : AuthService,
        private router : Router,
        private eventService : EventService,
        private geo : GeolocationService,
        private user: UserService,
    ){

    }
joinEvent(data) {
    // console.log(this.sub);
    // for (var i = 0; i = this.eventSubscribe.length; i++) {
    // this.sub.push(this.eventSubscribe[i];

    // }

    // console.log(this.eventSubscribe[0].event);
    for (var i = 0; i < this.sub.length; i++) {


        if (data.event == this.sub[i]) {
            console.log('coucou');
            this.resa2 = 0;
            return;
        } else {
            console.log('Pas coucou');
            this.resa2 = 1;

        }
    }



    this.eventService.joinEvent(data)
        .subscribe(res => { console.log(res)});
}


    unfollowEvent(data2) {
        // console.log(this.sub);
        // for (var i = 0; i = this.eventSubscribe.length; i++) {
        // this.sub.push(this.eventSubscribe[i];

        // }

        // console.log(this.eventSubscribe[0].event);
        for (var i = 0; i < this.sub.length; i++) {


            if (data2 == this.sub[i]) {
                console.log('coucou');
                this.alreadyRes2=false;
                this.resa2 = -1;
                this.eventService.unfollowEvent(data2)
                    .subscribe(res => { console.log(res)});
                return;
            } else {
                console.log('Pas coucou');
                this.resa2 = 0;

            }
        }



        this.eventService.unfollowEvent(data2)
            .subscribe(res => { console.log(res)});
    }


clickEvent(id){
    for (var i = 0; i < this.sub.length; i++) {


        if (id == this.sub[i]) {
            console.log('test');
            this.alreadyRes2=true;
            return;
        } else {
            console.log('Pas test');

        }
    }

}
    routing(){
        this.router.navigate([this.route]);
    }


    ngOnInit(){
        this.getEventNear();
        this.getFollow();

    }


    getFollow(){
        this.user.getUsersEvents().subscribe(

            // lat => {this.latitude = lat.coords.latitude},
            res => {
                this.eventSubscribe = res;
                console.log(this.eventSubscribe[0].event.id);

                for(var i =0; i < this.eventSubscribe.length;i++){
                    this.sub.push(this.eventSubscribe[i].event.id);
                }


            });
    }


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
                res => {
                    this.events = res;
                    this.eventContent = this.events;
                    //trier les sports
                    for (var i =0;i < this.events.length; i++){
                        // this.nomsSport.push(this.lesSports[i]);
                        // console.log(this.nomsSport);


                        this.nomsSport.push(this.events[i].sport.nomSport);
                    }
                });
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }














}