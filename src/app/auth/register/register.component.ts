import { Component} from '@angular/core';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent{
  constructor(public authService: AuthService) { }

  onClick() {
    const [email, password, repassword]: (HTMLInputElement | null)[] = [
      document.querySelector('#email'),
      document.querySelector('#password'),
      document.querySelector('#repassword')
    ];

    const user = {
      email: email?.value,
      password: password?.value,
      repassword: repassword?.value
    };

    this.authService.register(user);
  }
}
