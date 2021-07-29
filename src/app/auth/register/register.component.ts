import { Component} from '@angular/core';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent{
  constructor(public registerService: RegisterService) { }

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

    this.registerService.register(user);
  }
}
