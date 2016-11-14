import {Component} from "@angular/core";
@Component({
    selector:'mail',
    template:
`
<page-transition [pageId]="pageId" [route]="route" [menuName]="menuName" [menuColor]="menuColor">
<div class="row">
        <div class="main small-12 large-8 large-offset-2 columns">
            <div class="small-12 large-12 columns">
                <h1>Comfirmez le mail</h1>
                <div class="barre"></div>
                <div class="row">
                    <div class="small-12 medium-10 medium-offset-1 columns">
                        <p>Félicitation ! Vous venez de vous inscrire à Escape. Confirmez votre compte en cliquant sur le lien envoyé par mail afin de pouvoir vous connecter sur Escape !</p>
                        
                </div>
            </div>
        </div>
    </div>
</div>
 </page-transition>


`,
})


export class Mail {

    pageId='mail';
    route = '/auth';
    menuName = 'Se connecter';
    menuColor= "rgb(182,0,0)";
}