import {Component, OnInit} from "@angular/core";
import {NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {RegisterService} from "../Services/register.service";


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
        const {
            email,
            password,
            pseudo
        } = this.user;

        this._registerService.createUser(this.user);

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