import {Http, Response, Headers, RequestOptions } from "@angular/http";
import {Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {Event} from './TypeChecking';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class EventService {
    private userID = localStorage.getItem('id');

    // private _url = "http://escape.elpacha.fr/eventgeo/";

    //LOCAL
    private _url = "https://localhost/escape/web/app_dev.php/api/eventsgeo/";
    private _url2 = "https://localhost/escape/web/app_dev.php/api/events";
    private _url3 = "https://localhost/escape/web/app_dev.php/api/reserve_event";

    //ONLINE
    // private _url = "https://escape.elpacha.fr/api/web/app_dev.php/api/eventsgeo/";
    // private _url2 = "https://escape.elpacha.fr/api/web/app_dev.php/api/events";
    // private _url3 = "https://escape.elpacha.fr/api/web/app_dev.php/api/reserve_event";

    constructor(
        private _http: Http,
    ){}

    joinEvent(idSquare) :Observable<Event>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._url3, JSON.stringify(idSquare), {headers})
            .map(res => res.json());

    }

    getEvents(latitude,longitude,distance) :Observable<Event>{

        return this._http.get(this._url + latitude + '/' + longitude + '/' + distance)
        // .map(this.extractData)
            .map(
                res => res.json()
            )
            .catch(this.handleError);
    }

    postEvent(data) :Observable<Event>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._url2, JSON.stringify(data), {headers})
            .map(res => res.json());

    }

    getAllEvents() :Observable<Event>{

        return this._http.get(this._url2)
        // .map(this.extractData)
            .map(
                res => res.json()
            )
            .catch(this.handleError);
    }

    //  private extractData(res: Response) {
    //     let body = res.json();
    //     return body.data || { };
    // }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}