import { Component, OnInit, Input } from '@angular/core';
import { UserType } from '../user/user-details.model';

import { UpdateStatusService } from '../updateStatus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  fullName: string = 'Macherla Ramya Krishna';
  fontColor = 'blue';
  id = 1;
  canClick = false;
  // message = 'Hello, World';
  name = '';
  servers: string[] = ['testServer', 'testServer'];
  // @Input() usr: UserType;

  constructor(private statusService: UpdateStatusService) {}

  ngOnInit(): void {}

  addsServer() {
    return this.servers.push('');
  }

  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }

  onActivate() {
    this.statusService.activatedEmitter.next(true);
  }
}
