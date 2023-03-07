import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/header/navbar/navbar.component';
=======
import { BannerComponent } from './components/header/banner/banner.component';
>>>>>>> banner

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    BannerComponent
>>>>>>> banner
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
