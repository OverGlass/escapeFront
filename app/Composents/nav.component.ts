
import {Component} from "@angular/core";
@Component({
    selector:'nav',
    template: `
<ul class="menu">
  <li><a [routerLink]="['', 'register']">Register</a></li>
  <li><a [routerLink]="['', '']">Home</a></li>
</ul>
`
})

export class NavComponent {}