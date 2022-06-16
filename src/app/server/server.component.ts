import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: String = '';
  canEdit: Boolean = false;
  message: String = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can Edit me!';
    } else {
      this.message = 'Iam Read only';
    }
  }
}
