import {Component, OnInit} from "@angular/core";
import {MapsAPILoader } from 'angular2-google-maps/core';
import {EventService, UserService} from '../../../Services';
import {User} from "../../../Services/TypeChecking/user";

declare var google: any;

@Component({
    selector:'event-creator',
    template:`

              <div class="small-12 medium-6 columns " (click)="onClick(); false">
                    <div class="ajout-event" >
                        <span>Ajouter un événement<img src="img/plus.png" alt="plus" class="plus"></span>
                    </div>
                </div>
                
                
                <div class="small-12 columns" [hidden]="showEvent">
                    <div class="ajout-event-deroule">
                        <form #eventForm="ngForm" (submit)="newEvent()">
                        
                            <input 
                              type="text" 
                              auto-complete
                              [source]="lesSport"
                              placeholder="Sport" 
                              class="sport"
                              id="sport"
                              name="sport"
                              [(ngModel)]="event.sport"
                              #sport = "ngModel"
                             >

                            <!-- Bouton fermeture -->
                            <a href=""><img src="img/close.png" alt="close" class="close-icon"></a>

                            <hr/>
                            <input 
                              type="date"
                              id="date"
                              name="date"
                              [(ngModel)]="dateTime.date"
                              placeholder="Date" 
                              class="date"
                              #date = "ngModel"
                              
                             >
                             
                            <input 
                              type="time" 
                              id="heure"
                              name="heure" 
                              placeholder="Heure" 
                              [(ngModel)]="dateTime.time"
                              class="heure"
                             >
                             
                             
                             {{dateTime.date}} {{dateTime.time}}
                             {{timestamp}}
                             
                            <hr/>
                            
                            
                            <input 
                              type="text" 
                              placeholder="Adresse"
                              id="address"
                              name="address"
                             >
                             
                            <hr/>
                            
                            
                            <input 
                              type="text" 
                              name="description"
                              id="description"
                              placeholder="Description"
                              [(ngModel)]="event.description"
                               #description = "ngModel"
                             >
                             
                            <button class="go-button" type="submit">GO !</button>
                        </form>
                    </div>
                </div>

`

})


export class EventCreator implements OnInit{
    users = {
        id:'',
    };

    event= {
        sport :15,

        dateTime :{
            date: {
                year: 2014,
                month: 11,
                day: 5
            },
            time: {
                hour: 23,
                minute: 11
            }

        },

        usercreateur :'',


        nbr_personnes_max:10,
        description:'',
        ville_latitude:'',
        ville_longitude:''

    };

    dateTime = {
        date:'',
        time:'',
    };






    place;

    coords = {
        lat:'',
        lng:'',
    };
    showEvent: boolean = false;

    constructor(
        private _loader : MapsAPILoader,
        private eventsService : EventService,
        private userService : UserService
    ) {

    }

    ngOnInit(){
        this.autocomplete();
        this.getUsers();
    }



    onClick(){
        this.showEvent = !this.showEvent;
        console.log(this.showEvent);

    }

    autocomplete() {
        // this._loader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById("address"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                 this.place = autocomplete.getPlace();
                console.log(this.place.geometry.location.lat(), this.place.geometry.location.lng());

                console.log(this.place);
            });
        // });
    }
    getUsers() {
        this.userService.getUsers()
            .subscribe(
                res => this.users.id = res.id);
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }

    newEvent(){

        let time=this.dateTime.time.split(":");

        let hours = time[0];
        let min = time[1];

        let date=this.dateTime.date.split("-");

        let year = date[0];
        let month = date[1];
        let day = date[2];

        this.event.dateTime.time.hour= hours - 0;
        this.event.dateTime.time.minute= min - 0;

        this.event.dateTime.date.year= year - 0;
        this.event.dateTime.date.month= month - 0;
        this.event.dateTime.date.day= day - 0;



        this.event.ville_latitude = this.place.geometry.location.lat();
        this.event.ville_longitude = this.place.geometry.location.lng();

        this.event.usercreateur = this.users.id;
        console.log(JSON.stringify(this.event));

        this.eventsService.postEvent(this.event)
            .subscribe(res => { console.log(res)});
    }

}