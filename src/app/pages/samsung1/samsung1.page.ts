import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung1',
  templateUrl: './samsung1.page.html',
  styleUrls: ['./samsung1.page.scss'],
})
export class Samsung1Page implements OnInit {

  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }

  constructor() { }

  ngOnInit() {
  }

}
