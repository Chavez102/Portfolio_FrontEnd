import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';

import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';

import { routingComponents } from './app-routing.module';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { ContactMePageComponent } from './components/contact-me-page/contact-me-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMePageComponent,
    ExperiencePageComponent,
    routingComponents,
    PortfolioPageComponent,
    ContactMePageComponent,
    NotFoundPageComponent,
    FooterComponent,
    
  ],
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
