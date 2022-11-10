import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { Router } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userList: IUser[] = [];


  constructor(private http: HttpClient, private modalController: ModalController, public router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data: any) => {
        this.userList = data.users
      }
    )

  }

  click() {
    console.log('Tab1 > click()');
    this.presentModal()
  }

  logout() {
    this.router.navigate(['login']);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ContactPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

}