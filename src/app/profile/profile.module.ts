import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about/about.component';
import { HeaderComponent } from './header/header/header.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { EducationComponent } from './education/education/education.component';
import { IntroComponent } from './intro/intro/intro.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { SocialsComponent } from './socials/socials/socials.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    PortfolioComponent,
    SkillsComponent,
    EducationComponent,
    IntroComponent,
    ExperienceComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class ProfileModule { }
