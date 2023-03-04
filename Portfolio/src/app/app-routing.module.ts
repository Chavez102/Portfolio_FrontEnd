import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './components/about-me-page/about-me-page.component';
import { ContactMePageComponent } from './components/contact-me-page/contact-me-page.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMePageComponent },
  { path: 'experience',component: ExperiencePageComponent},
  { path: 'portfolio', component: PortfolioPageComponent},
  { path: 'contact-me', component: ContactMePageComponent},
  { path: '', redirectTo: '/about-me', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutMePageComponent, 
  ExperiencePageComponent, 
  PortfolioPageComponent,
  ContactMePageComponent  

]
