import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

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
