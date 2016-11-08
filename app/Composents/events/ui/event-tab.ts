import {Component, Input} from "@angular/core";
@Component({
    selector:'event-tab',
    template:
    `
        <div 
        (click)="onClick()"
        class="small-12 medium-6 columns"
        >
          <div class="event">
            <span>{{event.sport.nomSport}}<p>{{event.dateTime.timestamp * 1000 | date}} | Par @{{event.usercreateur.username}}{{event.usercreateur.firstname}}</p></span>
            <div class="qt-people">{{event.nbrPersonnesReserve}} / {{event.nbrPersonnesMax}}</div>
          </div>
          <div [hidden]="!showEvent" class="event-deroule">
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi ducimus eaque enim eum illo iusto libero.</p>
             <div class="go-button"><a href="">GO !</a></div>
             <img src="img/map.jpg" alt="map" class="map">
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