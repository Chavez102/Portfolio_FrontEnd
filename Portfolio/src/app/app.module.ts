import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';


import { routingComponents } from './app-routing.module';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';

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
    PortfolioCardComponent,
    
  ],
  imports: [
    MatSlideToggleModule, MatIconModule,MatToolbarModule, MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
