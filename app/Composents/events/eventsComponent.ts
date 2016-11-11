import {Component, OnInit} from '@angular/core';
import {Animations, AuthService, EventService, GeolocationService} from '../../Services';
import {Router} from '@angular/router';
import {forEach} from "@angular/router/src/utils/collection";
import {filter} from "rxjs/operator/filter";
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


    search(){

        // //Comparer QueryEvent à events.nomSport
        //
        // if (this.queryEvent !== ""){
        //     this.filteredList = this.nomsSport.filter(function(el){
        //         return el.toLowerCase().indexOf(this.queryEvent.toLowerCase()) > -1;
        //     }.bind(this));
        //
        //     console.log(this.filteredList + 'coucou');
        //     var onlyInA = this.events.filter(function(current){
        //         return this.filteredList.filter(function(current_b){
        //                 return  current.sport.nomSport == current_b
        //                     && current_b.display == current.display
        //             }).length == 0
        //     });
        //
        //
        // }else{
        //     this.filteredList = [];
        // }
        //
        // // this.events.map((el) => el.sport.nomSport).indexOf('blue');
        //
        //
        // console.log(onlyInA + 'AHHHHHHHHHh');
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
                res => {
                    this.events = res; console.log(res);
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