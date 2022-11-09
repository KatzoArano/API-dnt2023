import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p-delete',
  templateUrl: './p-delete.component.html',
  styleUrls: ['./p-delete.component.css']
})
export class PDeleteComponent implements OnInit {

  constructor(private activated: ActivatedRoute) { }

  ngOnInit(): void {
    // Au moment ou la page se met en place
    this.activated.params.subscribe(
      // on se branche sur le canal par lequel va passer les données
      (data) => {

      }
    )
  }

}
