import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  produitList: any[] = [];


  constructor() { }


  ngOnInit(): void {

    this.produitList = [
      {
        "nom": "Paella",
        "description": "Ceci est la description de la paella",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": true
      },
      {
        "nom": "Blanc poulet, riz",
        "description": "Ceci est la description du blanc boulet riz",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": true
      },
      {
        "nom": "Burger",
        "description": "Ceci est la description du burger",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": false
      },
      {
        "nom": "Croque monsieur",
        "description": "Ceci est la description du croque monsieur",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": false
      },
      {
        "nom": "Pizza",
        "description": "Ceci est la description de la pizza",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": false
      },
      {
        "nom": "Fish and potatoes",
        "description": "Ceci est la description du fish and potatoes maison",
        "categorie": "Plat",
        "prix": "12€",
        "disponible": true
      },
    ]
  }

}
