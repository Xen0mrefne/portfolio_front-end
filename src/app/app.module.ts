import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/home/header/header.component';
import { NavbarComponent } from './components/home/header/navbar/navbar.component';
import { MainComponent } from './components/home/main/main.component';
import { BannerComponent } from './components/home/header/banner/banner.component';
import { AboutComponent } from './components/home/main/about/about.component';
import { EducationComponent } from './components/home/main/education/education.component';
import { SkillsComponent } from './components/home/main/skills/skills.component';
import { ProjectsComponent } from './components/home/main/projects/projects.component';
import { DegreeComponent } from './components/home/main/education/degree/degree.component';
import { SkillItemComponent } from './components/home/main/skills/skill-item/skill-item.component';
import { ProjectItemComponent } from './components/home/main/projects/project-item/project-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

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
    ProjectItemComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
