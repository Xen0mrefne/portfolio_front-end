import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AboutComponent } from './components/main/about/about.component';
import { EducationComponent } from './components/main/education/education.component';
import { SkillsComponent } from './components/main/skills/skills.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { DegreeComponent } from './components/main/education/degree/degree.component';
import { SkillItemComponent } from './components/main/skills/skill-item/skill-item.component';
import { ProjectItemComponent } from './components/main/projects/project-item/project-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    DegreeComponent,
    SkillItemComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
