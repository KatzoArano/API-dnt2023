import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

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
  constructor(private activated: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(
      data => {
        console.log(data)
        this.user = data.data;
      }
    )

  }


  onSubmit(): void {
    console.log(this.user)
    this.userService.updateUser(this.user).subscribe(
      data => data
    )
    // this.router.navigate(['/admin/user']);
  }

}
