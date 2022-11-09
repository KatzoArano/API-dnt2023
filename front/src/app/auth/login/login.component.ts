import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form: any = {
    email: null,
    password: null
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.form.email === "orkatz@wanadoo.fr" && this.form.password === "orkatz") {
      this.router.navigate(['home']);
    }
  }

}
