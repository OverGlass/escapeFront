import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import {User} from './TypeChecking';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {
    private userID = localStorage.getItem('id');

    private _url = "https://localhost/escape/web/app_dev.php/api/users/";
    private _url2 = "https://localhost/escape/web/app_dev.php/api/users";
    private _url3 = "https://localhost/escape/web/app_dev.php/api/follow";
    private _url4 = "https://localhost/escape/web/app_dev.php/api/user_friends/";
    constructor(
        private _http: Http,
    ){}




    getUsers() :Observable<User>{

        return this._http.get(this._url + this.userID)
            // .map(this.extractData)
            .map(
                res => res.json()
            )
            .catch(this.handleError);
    }

    getAllUsers() :Observable<User>{

        return this._http.get(this._url2)
        // .map(this.extractData)
            .map(
                res => res.json()
            )
            .catch(this.handleError);
    }

    getFriendsUsers(){

        return this._http.get(this._url4 + this.userID)
        // .map(this.extractData)
            .map(
                res => res.json()
            )
            .catch(this.handleError);
    }

    postFriendsUsers(friends){
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._url3, JSON.stringify(friends), options)
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

