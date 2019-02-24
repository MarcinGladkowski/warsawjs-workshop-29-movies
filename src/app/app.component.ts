import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h2 [appBackgroundColor]="'red'">Kolor czerwony: </h2>
    <router-outlet></router-outlet>
    <app-menu></app-menu>
  `,
  styles: []
})
export class AppComponent {
  title = 'movies';
}
