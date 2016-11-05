import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <section class="allPages">
      <router-outlet></router-outlet>
    </section>
  `
})

export class App {}