import {Component, Input, Output, EventEmitter} from "@angular/core";
import {EventService} from '../../../Services';
@Component({
    selector:'event-tab',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    template:
    `
        <div class="small-12 medium-6 columns"  [class.medium-12]="showEvent">
          <div (click)="onClick(event.id) "class="event">
            <span>{{event.sport.nomSport}}<p>{{event.dateTime.timestamp * 1000 | date}} | Par @{{event.usercreateur.username}}{{event.usercreateur.firstname}}</p></span>
            <div class="qt-people">{{event.nbrPersonnesReserve + lol}} / {{event.nbrPersonnesMax}} <img src="img/user.png" alt="personne" class="icon-qt-people"></div>
          </div>
          <div [hidden]="!showEvent" class="event-deroule">
            <hr/>
            <div class="event">
              <p>{{event.description}}.</p>
              <div [hidden]="!res" class="go-button" (click)="unfollowEvent(event.id)">
                <span style="cursor: pointer">Se désabonner</span>
              </div>
              <div [hidden]="res" class="go-button" (click)="joinEvent(event.id)">
                <span style="cursor: pointer">S'inscrire</span>
              </div>
             </div>
             
          <sebm-google-map *ngIf="showEvent" [latitude]="event.villeLatitude - 0 " [zoom]="zoom" [longitude]="event.villeLongitude - 0">
             <sebm-google-map-marker [latitude]="event.villeLatitude - 0" [longitude]="event.villeLongitude - 0"></sebm-google-map-marker>
          </sebm-google-map>
          </div>
        </div>
`,

})

export class EventTab {
    @Input() event = {};
    zoom: number = 17;
    showEvent: boolean = false;
    userID = localStorage.getItem('id');
    @Input() alreadyRes = false;
    @Input() resa = 0;

    res=false;

    lol = 0;


    @Output() data = new EventEmitter();
    @Output() data2 = new EventEmitter();

    @Output() eventID = new EventEmitter();


    joinEvent(id){



        var data = {
            event:id,
            user:this.userID
        };

        this.data.emit(data);

        this.lol = this.resa;


    }

    unfollowEvent(id){



        var data = {
            event:id,
            user:this.userID
        };

        this.data2.emit(data);

        this.lol = this.resa;


    }

    onClick(id){

        this.eventID.emit(id);

        this.showEvent = !this.showEvent;
        // console.log(this.showEvent);

        this.res = this.alreadyRes;
    }

}