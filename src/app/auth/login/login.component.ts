import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginService
  ]
})
export class LoginComponent {

  userState: string | null | undefined;

  constructor(public loginService: LoginService) { }

  onClick() {
    const [email, password]: (HTMLInputElement | null)[] = [
      document.querySelector('#email'),
      document.querySelector('#password')
    ];

    const user = {
      email: email?.value,
      password: password?.value
    };

    this.userState = this.loginService.login(user);
  }
}
