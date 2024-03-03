import { Component } from '@angular/core';

@Component({
  //selector: '.app-servers',
  // selector: '.app-servers',
  selector: 'app-server',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverId: number = 10;
  serverStatus: string = "offline";
  serverCreationStatus:string = 'No server was created'
  serverName = 'TestServer';

  constructor(){
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server Was created ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;    
  }
}
