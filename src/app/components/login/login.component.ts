import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLogged: boolean = false;
  loginFail: boolean = false;
  loginUser!: LoginUser;
  username!: string;
  password!: string;
  roles!: string[];
  message: string | undefined;

  constructor(
    private tokenService:TokenService,
    private authService:AuthService,
    private router: Router) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.loginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.toHome();
    }
  }

  toHome(): void {
    this.router.navigate(["home"])
  }

  onLogin(): void{
    this.loginUser = new LoginUser(this.username, this.password)

    this.authService.login(this.loginUser)
    .subscribe({next: data => {
        this.isLogged = true;
        this.loginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.message = "Welcome, " + data.username
        setTimeout(() => {
          this.toHome();
        }, 3000)
      }, error: ({error}) => {
      this.isLogged = false;
      this.loginFail = true;
      this.message = "Username or password are incorrect";
      setTimeout(() => {
        this.loginFail = false;
      }, 3000)
      console.log(this.message)
    }})
  }

}
