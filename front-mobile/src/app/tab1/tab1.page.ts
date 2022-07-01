import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http
      .get(`https://dummyjson.com/products?limit=10`)
      .subscribe((resp: { products: any }) => {
        console.log(resp.products)
        this.data = resp.products
      });
  }

}