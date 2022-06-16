import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UpdateStatusService } from '../updateStatus.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit, OnDestroy {
  // appStatus = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('online');
  //   }, 2000);
  // });
  activatedMsg: boolean = false;
  private activatedSub: any; //Subscription;
  servers = [
    {
      instanceType: 'large',
      name: 'User Datbase',
      status: 'stable',
      started: new Date('01,04,2022'),
    },
    {
      instanceType: 'medium',
      name: 'Development Server',
      status: 'offline',
      started: new Date('01,04,2022'),
    },
    {
      instanceType: 'medium',
      name: 'Testing Environment Server',
      status: 'offline',
      started: new Date('01,04,2022'),
    },
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date('01,04,2022'),
    },
    {
      instanceType: 'small',
      name: 'Test Server',
      status: 'online',
      started: new Date('01,04,2022'),
    },
  ];
  filteredStatus: string = '';

  constructor(private statusService: UpdateStatusService) {}

  ngOnInit(): void {
    this.activatedSub = this.statusService.activatedEmitter.subscribe(
      (didActivate) => {
        this.activatedMsg = didActivate;
        // console.log(didActivate);
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  getStatusClasses(server: {
    instanceType: String;
    status: String;
    name: String;
    started: Date;
  }) {
    return {
      'bg-success text-white ': server.status === 'online',
      'bg-secondary': server.status === 'stable',
      'bg-danger ': server.status === 'offline',
    };
  }

  onAddServer() {
    this.servers.push({
      instanceType: 'large',
      name: 'New Server',
      status: 'online',
      started: new Date('01,04,2022'),
    });
  }
}
