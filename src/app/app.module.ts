import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './shared/directives/background-color.directive';

import { SharedModule } from './shared/shared.module';
import { LogicModule } from './logic/logic.module';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactComponent } from './components/page-contact/page-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    PageHomeComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LogicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
