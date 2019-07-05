import { Component, ViewChild } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Alice';

  person = new Person('Bob', 20);

  party = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
}
