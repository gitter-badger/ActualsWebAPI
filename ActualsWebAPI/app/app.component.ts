import { Component }          from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a routerLink="/applications" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Applications</a>
      <a routerLink="/skills" routerLinkActive="active">Skills</a>  
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}