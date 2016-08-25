import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';

import { routing,
         appRoutingProviders } from './app.routing';

import { ApplicationListComponent } from './applications/application-list.component';
import { SkillListComponent } from './skills/skill-list.component';

import { PageNotFoundComponent } from './shared/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
       ],
  declarations: [
      AppComponent,
      ApplicationListComponent,
      SkillListComponent,
      PageNotFoundComponent
    ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
