import { Component, OnInit } from '@angular/core';

interface UserType {
  name: String;
  age: Number;
  joinDate: Date;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: UserType[] = [
    { age: 21, name: 'Ramya', joinDate: new Date('02-21-2022') },
    { name: 'Shravani', age: 22, joinDate: new Date('02-07-2022') },
  ];
  constructor() {}

  ngOnInit(): void {}
}
