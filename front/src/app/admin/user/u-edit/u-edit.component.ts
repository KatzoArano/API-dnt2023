import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  user: any = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null,

  }
  constructor(private activated: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.http.get('http://localhost:8888/users/' + id).subscribe(
      (data: any) => {
        console.log(data)
        this.user = data.data;
      }
    )

  }

  onSubmit(): void {
    console.log(this.user)
  }

}
