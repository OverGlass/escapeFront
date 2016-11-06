import {Component} from '@angular/core';
import {Animations} from '../Services/animation';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'main-content',
  template:
`
<page-transition [pageId]="pageId" [menuColor]="menuColor">
  <h3>Page PUBLIC HOME</h3>
 </page-transition>


`,
  styles: [':host {z-index:100; width: 100%; display: block; position: absolute; }'],
  host: { '[@routeAnimation]': 'true' },
  animations:Animations.page,
})

export class MainComponent {
  pageId = "homePublic";
  // menuColor= "rgb(182,0,0)";
   menuColor= "rgb(202,202,202)";
}
