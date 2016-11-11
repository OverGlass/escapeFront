import {Component, OnInit} from "@angular/core";
import {NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {RegisterService} from "../../Services";
import {Router} from "@angular/router"


@Component({
    selector:'register',
    templateUrl:'register.template.html',

})

export class RegisterComponent {

    constructor(
        private _registerService : RegisterService,
        private router : Router,
    ){}


    // INPUT FORMULAIRE

    user = {
        email: '',
        password:'',
        username:'',
        firstname:'',

    };


    // CLICK SUBMIT

   onCreateUser(){

        this._registerService.createUser(this.user)
            .subscribe(
            res => {
                if (res) {
                    this.router.navigate(['/mail']);
                }
            });
    };



    resetForm(){
        this.user = {
            email: '',
            password:'',
            username:'',
            firstname:'',

        };
    }

}