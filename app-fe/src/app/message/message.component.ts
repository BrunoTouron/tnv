import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message',
  template: '<p class="alert alert-{{type}}"><ng-content></ng-content></p>',
  styleUrls: []
})
export class MessageComponent implements OnInit {
  @Input() type = 'primary';

  constructor() { }

  ngOnInit() {
  }

}
