import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';



@Injectable()
export class RegisterService {
    private _url = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http: Http){}

    createUser(user){
        return this._http.post(this._url, JSON.stringify(user));
    }
}


