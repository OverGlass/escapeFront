import {Component, OnInit} from "@angular/core";
import {NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {RegisterService} from "../Services";


@Component({
    selector:'register',
    templateUrl:'register.template.html',

})

export class RegisterComponent {

    constructor(private _registerService : RegisterService){

    }


    // INPUT FORMULAIRE

    user = {
        email: '',
        password:'',
        pseudo:''

    };


    // CLICK SUBMIT

    onCreateUser(){

        let commentOperation = this._registerService.createUser(this.user);

        commentOperation.subscribe(
            err => {
                // Log errors if any
                console.log(err);
            });

        console.log(JSON.stringify(this.user));
        this.resetForm();
    };



    resetForm(){
        this.user = {
            email: '',
            password:'',
            pseudo:''

        };
    }

}