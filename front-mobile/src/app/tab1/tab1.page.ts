import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ContactPage } from '../contact/contact.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController, public router: Router) {
  }

  ngOnInit(): void {
    this.http
      .get(`http://localhost:8888/users/`)
      .subscribe((resp: { data: any }) => {
        console.log(resp.data)
        this.data = resp.data
      });
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