import { Component, OnInit } from '@angular/core';

@Component({
  selector : ".app-servers",
  // selector: '[app-servers]',
  // templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  template: `
  <h3>List of Servers</h3>
  <app-server></app-server><app-server></app-server><app-server></app-server>
  <app-server></app-server><app-server></app-server><app-server></app-server>
  `,
  styles : [
    `h3 {
      color: darkblue;
    }`
  ]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
