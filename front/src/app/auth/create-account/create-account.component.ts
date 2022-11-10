import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { IUser } from 'src/app/_interfaces/user';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user: IUser = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    adresse: '',
    createdAt: '',
    updatedAt: '',
    deleteAt: null
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      data => console.log(data)
    )
  }

}
