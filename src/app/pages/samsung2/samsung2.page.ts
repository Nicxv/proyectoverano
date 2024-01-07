import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung2',
  templateUrl: './samsung2.page.html',
  styleUrls: ['./samsung2.page.scss'],
})
export class Samsung2Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
