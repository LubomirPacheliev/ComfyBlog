import { Component } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthService
  ]
})
export class LoginComponent {

  constructor(public authService: AuthService) { }

  onClick() {
    const [email, password]: (HTMLInputElement | null)[] = [
      document.querySelector('#email'),
      document.querySelector('#password')
    ];

    const user = {
      email: email?.value,
      password: password?.value
    };

    this.authService.login(user);
  }
}
