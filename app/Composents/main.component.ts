import {Component} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'main-content',
  template:
`
<page-transition [pageId]="pageId">
  <h3>Page PUBLIC HOME</h3>
 </page-transition>


`,

})

export class MainComponent {
  pageId = "homePublic";
}
