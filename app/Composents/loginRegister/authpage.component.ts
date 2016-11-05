import {Component} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'authpage',
    template: `
<page-transition>
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
})

export class AuthPage {
}