import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICredential } from 'src/app/_interfaces/credential';
import { IToken } from 'src/app/_interfaces/token';
import { AuthService } from 'src/app/_services/auth.service';
// import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: ICredential = {
    email: '',
    password: ''
  }

  constructor(
    // private authService: AuthService,
    // private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.email === "orkatz@wanadoo.fr" && this.form.password === "orkatz") {
      this.router.navigate(['home']);
    }
  }

  createAccount() {
    this.router.navigate(['auth/register']);
  }


}
