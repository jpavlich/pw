import { Component } from '@angular/core';
import { Invitation } from './invitation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  invitations = [
    new Invitation('Alice', false),
    new Invitation('Bob', false),
    new Invitation('Carol', false),
    new Invitation('David', false),
    new Invitation('Eve', false)
  ];

  message = '';

  quorum() {
    return this.invitations.filter(x => x.rsvp).length >= 3;
  }

  confirmParty() {
    this.message = 'Party confirmed!';
  }
}
