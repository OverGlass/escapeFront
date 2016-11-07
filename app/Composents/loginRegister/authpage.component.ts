import {Component} from '@angular/core';
import {Animations} from '../../Services/animation';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'authpage',
    template: `
<page-transition [pageId]="pageId" [route]="route" [menuName]="menuName" [menuColor]="menuColor">
  <div class="row">
    <ul class="menu">
       <li [routerLink]="['login']" [routerLinkActive]="['active']"><a >Login</a></li>
       <li [routerLink]="['register']" [routerLinkActive]="['active']"><a >Register</a></li>
    </ul>
  </div>
    
  <div>
    <router-outlet></router-outlet>
   </div>
</page-transition>
      

`,
    styles: [':host { width: 100%; display: block; position: absolute; }'],
    host: { '[@routeAnimation]': 'true' },
    animations:Animations.page,
})


export class AuthPage {
    pageId = "authPage";
    // menuColor = "rgb(222,61,61)";
     menuColor = "rgb(230,230,230)";
    route = "main-component";
    menuName=" Accueil";

}