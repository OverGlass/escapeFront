import {Component, Input} from "@angular/core";
@Component({
    selector:'page-transition',
    template:
`
<section id="{{pageId}}" class="bigPage">
  <div class="vpPage">
    <header><h1>Escape</h1></header> 
     <!--CONTENT-->

     <ng-content></ng-content>


    <!--END CONTENT-->
      <!--NAV-->
      <hr>
      <div class="row">
        <ul class="menu">
          <li [routerLink]="['/auth']" [routerLinkActive]="['active']"><a>Login / Register</a></li>
          <li [routerLink]="['/main-component']" [routerLinkActive]="['active']"><a>Home</a></li>
        </ul>
      </div>
      
   </div> <!-- Fin Viewport Page -->
</section> <!-- Fin bigPage -->

`,
})


export class pageTransition {
    @Input() pageId = "";
}