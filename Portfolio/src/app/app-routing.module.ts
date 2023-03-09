import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';

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
