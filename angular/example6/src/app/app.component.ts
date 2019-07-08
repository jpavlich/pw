import { Component } from '@angular/core';
import { Mail } from './mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMail = new Mail('', '', '');

  mailList = [
    new Mail('aa1@b.cc', 'hello1', 'world1'),
    new Mail('aa2@b.cc', 'hello2', 'world2'),
    new Mail('aa3@b.cc', 'hello3', 'world3'),
    new Mail('aa4@b.cc', 'hello4', 'world4'),
    new Mail('aa5@b.cc', 'hello5', 'world5'),
    new Mail('aa6@b.cc', 'hello6', 'world6'),
    new Mail('aa7@b.cc', 'hello7', 'world7')
  ];

  changeMail(i) {
    console.log(i);
    this.selectedMail = this.mailList[i];
  }
}
