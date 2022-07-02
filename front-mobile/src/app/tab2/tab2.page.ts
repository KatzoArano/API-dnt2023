import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalController: ModalController, public router: Router) { }

  click() {
    console.log('Tab2 > click()');
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ContactPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }

  logout() {
    this.router.navigate(['login']);
  }

}
