import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../mail';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {
  @Input()
  mail: Mail;
  constructor() {}

  ngOnInit() {}
}
