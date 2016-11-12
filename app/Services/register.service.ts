import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Injectable } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class RegisterService {

    private _url = "https://localhost/escape/web/app_dev.php/api/register";
    constructor(
        private _http: Http,
    ){}




    createUser(user){

        let userData = JSON.stringify(user); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._url, userData, options)
            .map(res => res.json())
            .map((res) => {
                if (res.Validation) {
                    // localStorage.setItem('auth_token', res.token);
                    // console.log(res.token);
                    return true;
                } else {
                    return false;
                }
                });
            // .map((res:Response) => res.json);
            // .catch(this.handleError);
            // .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

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


