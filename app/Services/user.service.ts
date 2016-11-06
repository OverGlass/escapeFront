import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {
    private userID = localStorage.getItem('id');

    private _url = "http://localhost/escape/web/app_dev.php/users/";
    constructor(
        private _http: Http,
    ){}




    getUsers(){

        return this._http.get(this._url + this.userID)
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
        console.log(this.userID);
        return Observable.throw(errMsg);
    }
}

