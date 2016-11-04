import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
<h1>Escape wallah c\'est cool, info sûr</h1>
    <div>
      <router-outlet></router-outlet>
    </div>
    <nav></nav>
  `
})

export class App {}