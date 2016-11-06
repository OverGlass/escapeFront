import {Component} from '@angular/core';
import {Animations, AuthService} from '../Services';
import {Router} from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'main-content',
  template:
`
<page-transition [pageId]="pageId" [menuColor]="menuColor">
  <h3>Bienvenue {{user}}</h3>
  <span class="button expend" (click)="onLogout()">Se deconnecter</span>
 </page-transition>


`,
  styles: [':host {z-index:100; width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations:Animations.page,
})

export class HomeAuth {

  constructor(
      private authservice : AuthService,
      private router : Router
  ){

  }

  onLogout(){
    this.authservice.logout();
    this.router.navigate(['main-component']);
  }
  user = "Antonin";
  pageId = "homePrivate";
  // menuColor= "rgb(182,0,0)";
   menuColor= "rgb(202,202,202)";
}
