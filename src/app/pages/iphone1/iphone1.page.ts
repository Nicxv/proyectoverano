import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone1',
  templateUrl: './iphone1.page.html',
  styleUrls: ['./iphone1.page.scss'],
})
export class Iphone1Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
