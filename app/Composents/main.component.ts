import {Component} from '@angular/core';
import {Animations} from '../Services/animation';
import {Router} from "@angular/router";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'main-content',
  template:
`
<page-transition class="home" [pageId]="pageId" [route]="route" [menuName]="menuName" [menuColor]="menuColor">
  <div class="row  main">
        <div class="main-home small-12 medium-10 medium-offset-1 columns">
            <div class="small-12 medium-12 columns">
                <div class="row">
                <div class="small-12 medium-6 columns">
                    <h2>Marre de faire du sport seul ?</h2>
                </div>
                <div class="small-12 medium-6 columns">
                    <img src="img/runner.jpg" alt="runner" class="img-home">
                </div>
                <div class="small-12 medium-6 columns">
                    <img src="img/groupe.jpg" alt="groupe" class="img-home">
                </div>
                <div class="small-12 medium-6 columns">
                    <h2>Venez tester Escape !</h2>
                </div>
                </div>
                <div class="row">
                    <div class="small-12 medium-4 medium-offset-1 columns">
                        <h4>Créez vos évènements et trouvez des partenaires</h4>
                        <p>Avec Escape, vous pouvez très simplement proposer des activités qui vous plaisent aux horaires et dans des lieux que vous choisissez. Chaque utilisateur est alors libre de se joindre à vous s'il le souhaite. Vous ne serez plus jamais seul !</p>
                    </div>
                    <div class="small-12 medium-4 medium-offset-2 end columns">
                        <h4>Participez aux activités proposées par la communauté</h4>
                        <p>Vous avez une envie sportive mais manquez d'inspiration ? Regardez rapidement les activités proposées par d'autres membres autour de chez vous et lancez-vous.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 medium-4 medium-offset-1 columns">
                        <h4>Gérez votre profil</h4>
                        <p>Vos préférences sportives, votre niveau, vos amis... Retrouvez et gérez toutes vos informations facilement.</p>
                    </div>
                    <div class="small-12 medium-4 medium-offset-2 end columns">
                        <h4>Faites vous un réseau sportif</h4>
                        <p>Rencontrez des sportifs près de chez vous grâce à Escape et constituez-vous un véritable réseau grâce à notre système d'amis.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  <div class="navTr">
<svg class="triangleNav" width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g  class="triFill" (click)="routing()">
        <path    d="M500,500l-212.132,0l212.132,-212.132l0,212.132Z" style="fill:#b60000;" />
        <g transform="matrix(1.15945,-1.15945,1.15945,1.15945,-584.32,404.348)">
            <text x="390.67px" y="452.11px" style="font-family:'PTSans-Bold', 'PT Sans', sans-serif;font-weight:700;font-size:12px;fill:#fff;">C<tspan x="396.982px " y="452.11px ">O</tspan>NNEC<tspan x="433.234px " y="452.11px ">T</tspan>ION</text>
            <text x="390.67px" y="465.538px" style="font-family:'PTSans-Bold', 'PT Sans', sans-serif;font-weight:700;font-size:12px;fill:#fff;">INSCRIPTION</text>
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

export class MainComponent {
  pageId = "homePublic";
  menuColor= "rgb(182,0,0)";
  //  menuColor= "rgb(202,202,202)";
  route = '/auth';
  menuName = 'Connection <br> Inscription';

  constructor(private router: Router){}


  routing(){
    this.router.navigate([this.route]);
  }
}
