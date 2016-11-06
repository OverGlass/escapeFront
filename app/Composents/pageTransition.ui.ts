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
   <svg id="triMenu" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g class="triangleSvg" transform="matrix(-0.95555,0.95555,-0.654729,-0.654729,982.836,344.529)">
        <path d="M334,250L445,412L223,412L334,250Z" [attr.fill]='menuColor'/>
    </g>
</svg>
</section> <!-- Fin bigPage -->

`,

})


export class pageTransition {
    @Input() pageId = "";
    @Input() menuColor= "";
}