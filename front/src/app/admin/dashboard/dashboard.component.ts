import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // userList: un array de IUser
  userList: IUser[] = [];

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.userList = data.users
      }
    )

  }
}
