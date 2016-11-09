import {Component, Input} from "@angular/core";
@Component({
    selector:'event-tab',
    template:
    `
        <div class="small-12 medium-6 columns">
          <div (click)="onClick() "class="event">
            <span>{{event.sport.nomSport}}<p>{{event.dateTime.timestamp * 1000 | date}} | Par @{{event.usercreateur.username}}{{event.usercreateur.firstname}}</p></span>
            <div class="qt-people">{{event.nbrPersonnesReserve}} / {{event.nbrPersonnesMax}}</div>
          </div>
          <div [hidden]="!showEvent" class="event-deroule">
            <hr/>
            <p>{{event.villeLatitude}} {{event.villeLongitude}}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi ducimus eaque enim eum illo iusto libero.</p>
             <div class="go-button"><a href="">GO !</a></div>
             <ng-content></ng-content>
          <sebm-google-map [latitude]="event.villeLatitude - 0  " [longitude]="event.villeLongitude - 0">
  <sebm-google-map-marker [latitude]="event.villeLatitude - 0" [longitude]="event.villeLongitude - 0"></sebm-google-map-marker>
</sebm-google-map>
          </div>
        </div>
`,

})

export class EventTab {
    @Input() event = {};
    showEvent: boolean = false;

    onClick(){
        this.showEvent = !this.showEvent;
        console.log(this.showEvent);
    }

}