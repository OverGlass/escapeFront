import {Component, OnInit} from "@angular/core";
import {NgForm, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Http} from "@angular/http";
import {RegisterService} from "../Services/register.service";


@Component({
    selector:'register',
    templateUrl:'register.template.html',

})

export class RegisterComponent {

    constructor(private _registerService : RegisterService){

    }

    user = {
        email: '',
        password:'',
        pseudo:''

    };

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



    mode: string = 'Connection';
    linkText: string= "Devenir un sportif collaboratif ?";

    changeMode() {
        if (this.mode === 'Connection') {
            this.mode ='Inscription';
            this.linkText = 'Déja un sportif collaboratif ?'
        } else {
            this.mode = 'Connection';
            this.linkText= "Devenir un sportif collaboratif ?"
        }
    }


    On
}