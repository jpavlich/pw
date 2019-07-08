import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  selectedMail: Mail;
  mails = [
    new Mail('aa1@b.cc', 'hello1', 'world1'),
    new Mail('aa2@b.cc', 'hello2', 'world2'),
    new Mail('aa3@b.cc', 'hello3', 'world3'),
    new Mail('aa4@b.cc', 'hello4', 'world4'),
    new Mail('aa5@b.cc', 'hello5', 'world5'),
    new Mail('aa6@b.cc', 'hello6', 'world6'),
    new Mail('aa7@b.cc', 'hello7', 'world7')
  ];
  constructor() {}

  ngOnInit() {
    this.selectedMail = this.mails[0];
  }

  selectMail(i) {
    this.selectedMail = this.mails[i];
  }
}
