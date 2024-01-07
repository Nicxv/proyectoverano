import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone2',
  templateUrl: './iphone2.page.html',
  styleUrls: ['./iphone2.page.scss'],
})
export class Iphone2Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
