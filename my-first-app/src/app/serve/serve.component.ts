import { Component } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styles: [
    `
    .online {
      color: white;
    }
    `
  ]
})
export class ServeComponent {
  serverStatus: string = 'offline';
  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
