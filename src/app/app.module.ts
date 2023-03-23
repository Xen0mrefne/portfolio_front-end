import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { interceptorProvider } from './service/interceptor-service';
import { ExperiencesComponent } from './components/home/main/experiences/experiences.component';
import { ExperienceItemComponent } from './components/home/main/experiences/experience-item/experience-item.component';
import { ExperienceAddComponent } from './components/home/main/experiences/experience-add/experience-add.component';
import { ExperienceEditComponent } from './components/home/main/experiences/experience-item/experience-edit/experience-edit.component';
import { EditButtonComponent } from './components/common/edit-button/edit-button.component';
import { DeleteButtonComponent } from './components/common/delete-button/delete-button.component';
import { DeleteConfirmationComponent } from './components/common/delete-confirmation/delete-confirmation.component';
import { DegreeAddComponent } from './components/home/main/education/degree-add/degree-add.component';
import { DegreeEditComponent } from './components/home/main/education/degree/degree-edit/degree-edit.component';
import { AddButtonComponent } from './components/common/add-button/add-button.component';
import { ProjectAddComponent } from './components/home/main/projects/project-add/project-add.component';
import { ProjectEditComponent } from './components/home/main/projects/project-item/project-edit/project-edit.component';

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
    LoginComponent,
    ExperiencesComponent,
    ExperienceItemComponent,
    ExperienceAddComponent,
    ExperienceEditComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DeleteConfirmationComponent,
    DegreeAddComponent,
    DegreeEditComponent,
    AddButtonComponent,
    ProjectAddComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
