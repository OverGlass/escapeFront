import {Component, OnInit} from '@angular/core';
import {Animations, AuthService, UserService, GeolocationService} from '../Services';
import {Router} from '@angular/router';
// import {User} from "../Services/TypeChecking/user";
// import {Observable} from 'rxjs/Rx';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'home-content',
  template:
`
<page-transition [pageId]="pageId" [route]="route" [menuColor]="menuColor">
  <h3>Bienvenue {{users}} {{users.username}}</h3>
  <span class="button expend" (click)="onLogout()">Se deconnecter</span>
 </page-transition>


`,
  styles: [':host {z-index:100; width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations:Animations.page,
})

export class HomeAuth implements OnInit{
  users={};
  pageId = "homePrivate";
  // menuColor= "rgb(182,0,0)";
  menuColor= "rgb(202,202,202)";
  route = "/main-component";

  constructor(
      private authService : AuthService,
      private router : Router,
      private userService : UserService,
      private geolocalisationService : GeolocationService,
  ){

  }
  ngOnInit(){
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.userService.getUsers()
        .subscribe(
            res => this.users = res);
            // res =>  console.log(res));

    // error =>  this.errorMessage = <any>error);
  }



  onLogout(){
    this.authService.logout();
    this.router.navigate(['main-component']);
  }

}
