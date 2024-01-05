import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xiaomi2',
  templateUrl: './xiaomi2.page.html',
  styleUrls: ['./xiaomi2.page.scss'],
})
export class Xiaomi2Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
