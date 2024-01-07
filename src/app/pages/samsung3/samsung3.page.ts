import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samsung3',
  templateUrl: './samsung3.page.html',
  styleUrls: ['./samsung3.page.scss'],
})
export class Samsung3Page implements OnInit {
  showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
  constructor() { }

  ngOnInit() {
  }

}
