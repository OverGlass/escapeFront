
import {Component} from "@angular/core";
@Component({
    selector:'nav',
    template: `
<ul class="menu">
  <li [routerLink]="['/auth']" [routerLinkActive]="['active']"><a>Login / Register</a></li>
  <li [routerLink]="['/main-component']" [routerLinkActive]="['active']"><a>Home</a></li>
</ul>
`
})

export class NavComponent {
}