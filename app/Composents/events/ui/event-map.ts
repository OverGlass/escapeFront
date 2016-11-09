import {Component, Input} from "@angular/core";
import {GeolocationService} from '../../../Services'
@Component({
    selector:'event-map',
    template :`
<sebm-google-map [latitude]="lat" [longitude]="lng">
  <!--<sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>-->
  <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
</sebm-google-map>

`,
})

export class EventMap
{
    // loca;
    // lat2: number = 51.678418;
    @Input() lat;
    @Input() lng;
    // lng2: number = 7.809007;
    // opt={
    //     enableHighAccuracy : false,
    //     timeout: Infinity,
    //     maximumAge :0
    // }

    // constructor(private geo : GeolocationService) {}
    // ngOnInit(){

        // this.geo.getLocation().subscribe(
            // res => console.log(res),
            // lat => this.lat = lat.coords.latitude,
            // lng => this.lng = lng.coords.longitude,
        // )


    // }



}