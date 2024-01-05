import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xiaomi3',
  templateUrl: './xiaomi3.page.html',
  styleUrls: ['./xiaomi3.page.scss'],
})
export class Xiaomi3Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
