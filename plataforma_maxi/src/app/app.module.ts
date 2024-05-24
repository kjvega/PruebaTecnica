import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './layout/landing-page/landing-page.component';
import { MainComponent } from './layout/main/main.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GoogleMapsModule} from "@angular/google-maps";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {VerifyTokenInterceptor} from "./core/interceptors/verify-token.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: VerifyTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
