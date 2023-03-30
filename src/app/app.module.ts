import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/header/navbar/navbar.component';
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
import { ExperienceEditComponent } from './components/home/main/experiences/experience-edit/experience-edit.component';
import { EditButtonComponent } from './components/common/edit-button/edit-button.component';
import { DeleteButtonComponent } from './components/common/delete-button/delete-button.component';
import { DeleteConfirmationComponent } from './components/common/delete-confirmation/delete-confirmation.component';
import { DegreeAddComponent } from './components/home/main/education/degree-add/degree-add.component';
import { DegreeEditComponent } from './components/home/main/education/degree-edit/degree-edit.component';
import { AddButtonComponent } from './components/common/add-button/add-button.component';
import { ProjectAddComponent } from './components/home/main/projects/project-add/project-add.component';
import { ProjectEditComponent } from './components/home/main/projects/project-edit/project-edit.component';
import { SkillAddComponent } from './components/home/main/skills/skill-add/skill-add.component';
import { SkillEditComponent } from './components/home/main/skills/skill-edit/skill-edit.component';
import { TechComponent } from './components/home/main/about/technologies/tech/tech.component';
import { TechAddComponent } from './components/home/main/about/technologies/tech-add/tech-add.component';
import { TechnologiesComponent } from './components/home/main/about/technologies/technologies.component';
import { PersonEditComponent } from './components/home/main/about/person-edit/person-edit.component';
import { TechEditComponent } from './components/home/main/about/technologies/tech-edit/tech-edit.component';
import { LoaderComponent } from './components/common/loader/loader.component';
import { ImageEditComponent } from './components/home/main/about/image-edit/image-edit.component';
import { BannerEditComponent } from './components/home/header/banner/banner-edit/banner-edit.component';
import { AlertComponent } from './components/common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    ProjectEditComponent,
    SkillAddComponent,
    SkillEditComponent,
    TechComponent,
    TechAddComponent,
    TechnologiesComponent,
    PersonEditComponent,
    TechEditComponent,
    LoaderComponent,
    ImageEditComponent,
    BannerEditComponent,
    AlertComponent
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
