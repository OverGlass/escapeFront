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
<page-transition [pageId]="pageId" [route]="route" [menuName]="menuName" [menuColor]="menuColor">
  <h3>Bienvenue {{users.firstname}} {{users.username}}</h3>
  <span class="button expend" (click)="onLogout()">Se deconnecter</span>
  <profil></profil>
  <div class="navTr">
<svg class="triangleNav" width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g class="triFill" (click)="routing()">
        <path id="triMenu" d="M500,500l-212.132,0l212.132,-212.132l0,212.132Z" style="fill:#b60000;" />
        <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-459.788,-285.332)">
            <text x="66.263px" y="1153.67px" style="font-family:'PTSans-Bold', 'PT Sans', sans-serif;font-weight:700;font-size:19.676px;fill:#fff;">EVENEMENTS</text>
        </g>
    </g>
</svg>
</div>
 </page-transition>


`,
  styles: [':host {z-index:100; width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations:Animations.page,
})

export class HomeAuth implements OnInit{
  users={};
  pageId = "homePrivate";
  menuColor= "rgb(182,0,0)";
  // menuColor= "rgb(202,202,202)";
  route = "/events";
  menuName='Evenements';

  constructor(
      private authService : AuthService,
      private router : Router,
      private userService : UserService,
      private geolocalisationService : GeolocationService,
  ){

  }

  routing(){
    this.router.navigate([this.route]);
  }
  ngOnInit(){
    this.getUsers();
    console.log(this.users);
  }

  getUsers() {
    this.userService.getUsers()
        .subscribe(
            res => {
              this.users = res;
            });
            // res =>  console.log(res));

    // error =>  this.errorMessage = <any>error);
  }



  onLogout(){
    this.authService.logout();
    this.router.navigate(['main-component']);
  }

}
