import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExamplesComponent } from './work-examples/work-examples.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguagesComponent } from './languages/languages.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    SkillsComponent,
    WorkExamplesComponent,
    EducationComponent,
    ExperienceComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'Me', component: ContactMeComponent},
      {path: 'Education', component: EducationComponent},
      {path: 'Skills', component: SkillsComponent},
      {path: 'Expa', component: ExperienceComponent},
      {path: 'Work', component: WorkExamplesComponent},
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
