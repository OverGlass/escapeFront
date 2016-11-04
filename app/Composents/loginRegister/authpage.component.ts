import {Component} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'authpage',
    template: `
  <hr>
<ul class="menu">
  <li [routerLink]="['login']" [routerLinkActive]="['active']"><a >Login</a></li>
  <li [routerLink]="['register']" [routerLinkActive]="['active']"><a >Register</a></li>

</ul>
    <div>
      <router-outlet></router-outlet>
    </div>
`,
})

export class AuthPage {
}