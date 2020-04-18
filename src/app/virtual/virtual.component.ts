import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styles: []
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport ) viewport: CdkVirtualScrollViewport;

  people = Array(1000).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  goToStart() {
    this.viewport.scrollToIndex( 0 );
  }

  goToMiddle() {
    this.viewport.scrollToIndex( this.people.length / 2 );
  }

  goToEnd() {
    this.viewport.scrollToIndex( this.people.length );
  }

}
