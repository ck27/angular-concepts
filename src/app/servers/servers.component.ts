import { Component, OnInit } from '@angular/core';

@Component({
  selector : ".app-servers",
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // selector: '[app-servers]',
  // template: `
  // <h3>List of Servers</h3>
  // <app-server></app-server><app-server></app-server><app-server></app-server>
  // <app-server></app-server><app-server></app-server><app-server></app-server>
  // `,
  // styles : [
  //   `h3 {
  //     color: darkblue;
  //   }`
  // ]
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus = "No Server created.";
  serverName = "DummyServers";
  serverCreated = false;

  servers = [ "Test-1", "Test-2"];

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    },3000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created successfully. Server name is " + this.serverName;
  }

  onServerNameUpdate = (event:Event) => {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
