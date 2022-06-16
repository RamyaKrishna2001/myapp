import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { UserType } from '../user/user-details.model';
import { UpdateStatusService } from '../updateStatus.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() element: any;
  // counter: number = 0;
  interval: any;
  items: any = [];
  pageOfItems: any;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  msg: string = 'Hello, How are you?';
  // @Input('fromParent') recievedFromParent: any;
  @Input() fromParent: any;
  // @Output() fromChild = new EventEmitter<string>();
  @Output() fromChild = new Subject<string>();
  // msgFromChild: string = 'parent has recieved message from child';
  public usersData: UserType;

  constructor(private localStorage: UpdateStatusService) {
    console.log('constructor is called!');
  }

  ngOnInit(): void {
    console.log('NgOnInit is called!');
    this.items = Array(115)
      .fill(0)
      .map((x, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
    console.log(this.items);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
    this.getUsers()
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log('OnDestroy is called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges is called!');
  }

  pageChange(pageOfItems: Array<any>) {
    // console.log(pageOfItems);
    this.pageOfItems = pageOfItems;
  }

  sendMessage() {
    this.fromChild.next('parent has recieved message from child');
  }

  getUsers() {
    this.localStorage.getUsersData().subscribe((data) => {
      console.log(data);
      this.usersData = data;
    });
  }
}
