import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  party = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
  confirmed = Array<boolean>(this.party.length).fill(false);
  message = '';

  rsvp(event, i: number) {
    console.log(event.target.checked, i);
    this.confirmed[i] = event.target.checked;
    console.log(this.confirmed);
  }
  confirmParty() {
    const quorum = this.confirmed.filter(x => x).length >= 3;
    if (quorum) {
      this.message = 'Party is ready';
    } else {
      this.message = 'no quorum';
    }
  }
}
