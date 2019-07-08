import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  @Input()
  mails = [];

  @Output()
  selectionChanged = new EventEmitter<number>();

  selectedIndex: number;

  constructor() {}

  ngOnInit() {}

  selectMail(i) {
    this.selectionChanged.emit(i);
    this.selectedIndex = i;
  }
}
