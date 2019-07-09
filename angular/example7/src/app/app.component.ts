import { Component } from '@angular/core';
import { Mail } from './mail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myMail = new Mail('aaa@bbb.ccc', '', '');
  title = 'example7';
}
