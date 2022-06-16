import { Component, OnInit } from '@angular/core';
import { UserType } from './user/user-details.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isCalled: boolean = false;
  // elmnt: string = 'Hello! How are you?';
  user: UserType[];
  users: any;
  asyncResult: any;
  sendMsgToChild: string = 'Hi, Iam Ramya Krihna';
  recievedMesage: any;

  constructor(private httpClient: HttpClient) {
    this.user = [
      new UserType('Ramya', 21, new Date('02-21-2022')),
      new UserType('Ramya', 21, new Date('02-21-2022')),
    ];
  }

  ngOnInit(): void {
    this.getAsyncData();
    // console.log('Fetching data using promise');
    // this.fetchUsersDataAsPromise()
    //   .then((data) => {
    //     // console.log(JSON.stringify(data));
    //     this.users = data;
    //     console.log(this.users);
    //   })
    //   .catch((error) => {
    //     console.log('Promise rejected here' + JSON.stringify(error));
    //   });

    console.log('Fetchng data using subscribe');
    this.fetchUsersDataBySubscribe().subscribe((data) => {
      this.users = data;
      // console.log(this.users);
    });
  }

  recieveMessage(data: string) {
    this.recievedMesage = data;
  }

  // fetchUsersDataAsPromise() {
  //   return this.httpClient
  //     .get('https://jsonplaceholder.typicode.com/users')
  //     .toPromise();
  // }

  fetchUsersDataBySubscribe() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  async getAsyncData() {
    this.asyncResult = await this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
    // console.log(this.asyncResult);
  }

  toggleChild() {
    this.isCalled = !this.isCalled;
  }
}
