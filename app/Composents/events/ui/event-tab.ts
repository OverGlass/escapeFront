import {Component, Input} from "@angular/core";
@Component({
    selector:'event-tab',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    template:
    `
        <div class="small-12 medium-6 columns">
          <div (click)="onClick() "class="event">
            <span>{{event.sport.nomSport}}<p>{{event.dateTime.timestamp * 1000 | date}} | Par @{{event.usercreateur.username}}{{event.usercreateur.firstname}}</p></span>
            <div class="qt-people">{{event.nbrPersonnesReserve}} / {{event.nbrPersonnesMax}}</div>
          </div>
          <div [hidden]="!showEvent" class="event-deroule">
            <hr/>
            <p>{{event.description}}.</p>
             <div class="go-button"><a href="">GO !</a></div>
             <ng-content></ng-content>
             
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

    onClick(){
        this.showEvent = !this.showEvent;
        console.log(this.showEvent);
    }

}