import {Component} from '@angular/core';
import {Animations} from '../../Services/animation';
import {Router} from "@angular/router";
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'authpage',
    template: `
<page-transition [pageId]="pageId" [route]="route" [menuName]="menuName" [menuColor]="menuColor">
        <div class="top-bar-right">
            <ul class="menu">
       <li [routerLink]="['login']" [routerLinkActive]="['active']"><a >Login</a></li>
       <li [routerLink]="['register']" [routerLinkActive]="['active']"><a >Register</a></li>
            </ul>
        </div>
    
  <div>
    <router-outlet></router-outlet>
   </div>

  <div class="navTr">
    <svg class="triangleNav" width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g  class="triFill" (click)="routing()">
        <path id="triMenu" d="M500,500l-212.132,0l212.132,-212.132l0,212.132Z" style="fill:#de3d3d;" />
        <g transform="matrix(0.707107,-0.707107,0.707107,0.707107,-445.898,-287.943)">
            <text x="70.056px" y="1135.6px" style="font-family:'PTSans-Bold', 'PT Sans', sans-serif;font-weight:700;font-size:19.676px;fill:#fff;">A<tspan x="81.35px 91.7px " y="1135.6px 1135.6px ">CC</tspan>UEIL</text>
        </g>
    </g>
</svg>
  </div>
</page-transition>
      

`,
    styles: [':host { width: 100%; display: block; position: absolute; }'],
    host: { '[@routeAnimation]': 'true' },
    animations:Animations.page,
})


export class AuthPage {
    pageId = "authPage";
    menuColor = "rgb(222,61,61)";
    //  menuColor = "rgb(230,230,230)";
    route = "main-component";
    menuName=" Accueil";

    constructor(private router: Router){}


    routing(){
        this.router.navigate([this.route]);
    }

}