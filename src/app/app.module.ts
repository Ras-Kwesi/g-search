import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {GithubService} from './githubservice'

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
