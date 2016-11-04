import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class RegisterService {

    private _url = "http://localhost/escape/web/app_dev.php/antonin";
    constructor(
        private _http: Http,
    ){}




    createUser(user){

        let userData = JSON.stringify(user); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._url, userData, options)
            .map((res:Response) => res.json)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}


