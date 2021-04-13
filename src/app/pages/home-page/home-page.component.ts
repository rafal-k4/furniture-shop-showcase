import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    './assets/furniture/furniture-1.jpg',
    './assets/furniture/furniture-2.jpg',
    './assets/furniture/furniture-3.jpg']

  constructor() { }

  ngOnInit(): void {
  }

}
