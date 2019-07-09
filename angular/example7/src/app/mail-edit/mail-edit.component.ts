import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-edit',
  templateUrl: './mail-edit.component.html',
  styleUrls: ['./mail-edit.component.css']
})
export class MailEditComponent implements OnInit {
  @Input()
  mail: Mail;

  message = '';
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.message = 'Mail sent';
  }
}
