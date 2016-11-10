import {Component, OnInit, ElementRef} from "@angular/core";
import {MapsAPILoader } from 'angular2-google-maps/core';
import {EventService, UserService, SportService} from '../../../Services';
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
                              placeholder="Sport" 
                              class="sport"
                              id="sport"
                              name="sport"
                              [(ngModel)]="querySearch"
                              (keyup)="filter()"
                              (focusout)="filter2()"
                              #sport = "ngModel"
                             >
                             <div class="suggestions" *ngIf="filteredList.length > 0">
                                 <ul *ngFor="let item of filteredList" >
                              <li >
                                 <span (click)="select(item)">{{item}}</span>
                              </li>
                </ul>
            </div>

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



    // -------- SPORT ----------


    public querySearch = "";

    public lesSports = [];
    public nomsSport=[];

    public filteredList = [];

    public elementRef;




    // -------- USER ----------

    users = {
        id:'',
    };



    // -------- EVENT ----------

    event= {
        sport :6969,

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
        private userService : UserService,
        private sportService : SportService,
        myElement : ElementRef
    ) {
        this.elementRef = myElement;

    }

    ngOnInit(){
        this.autocomplete();
        this.getUsers();
        this.getSport();
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

                // console.log(this.place.geometry.location.lat(), this.place.geometry.location.lng());
                // console.log(this.place);
            });
        // });
    }


    // -------- SPORT ----------

    getSport() {
        this.sportService.getSports()
            .subscribe(
                res => {
                    this.lesSports = res;
                    console.log(JSON.stringify(res));
                    for (var i =0;i < this.lesSports.length; i++){
                        // this.nomsSport.push(this.lesSports[i]);
                        // console.log(this.nomsSport);


                           this.nomsSport.push(this.lesSports[i].nomSport);
                    }
                    console.log(this.nomsSport );
                });
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }
    filter2() {
        for (var i = 0; i < this.lesSports.length; i++) {
            // this.nomsSport.push(this.lesSports[i]);
            // console.log(this.nomsSport);

            console.log(this.querySearch+'lol', this.lesSports[i].nomSport);

            if (this.querySearch == this.lesSports[i].nomSport) {
                this.event.sport = this.lesSports[i].id;
                console.log(this.event.sport);
            } else {
                console.log('Mauvaise entrée');

            }
        }
        console.log(this.event.sport);
    }

    filter() {

        if (this.querySearch !== ""){
            this.filteredList = this.nomsSport.filter(function(el){
                return el.toLowerCase().indexOf(this.querySearch.toLowerCase()) > -1;
            }.bind(this));
        }else{
            this.filteredList = [];
        }
    }

    select(item){
        this.querySearch = item;
        this.filter2();
        this.filteredList = [];
    }



    // -------- USER ----------

    getUsers(){
        this.userService.getUsers()
            .subscribe(
                res => this.users.id = res.id);
        // res =>  console.log(res));

        // error =>  this.errorMessage = <any>error);
    }

    
    // -------- EVENT ----------

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