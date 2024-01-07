import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone3',
  templateUrl: './iphone3.page.html',
  styleUrls: ['./iphone3.page.scss'],
})
export class Iphone3Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
