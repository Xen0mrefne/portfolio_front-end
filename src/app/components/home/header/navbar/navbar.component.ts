import { Component } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged:boolean = false;

  constructor (private tokenService:TokenService) {}

  ngOnInit(): void {
   if (this.tokenService.getToken()) {
    this.isLogged = true;
   } else {
    this.isLogged = false;
   }
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }
}
