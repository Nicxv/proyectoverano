import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xiaomi1',
  templateUrl: './xiaomi1.page.html',
  styleUrls: ['./xiaomi1.page.scss'],
})
export class Xiaomi1Page implements OnInit {
  showFullContent: boolean = false;
  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }

  constructor() { }

  ngOnInit() {
  }

}
