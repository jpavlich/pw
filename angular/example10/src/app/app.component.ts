import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example10';

  ngOnInit() {
    const dataSource = of(1, 2, 3, 4, 5);

    // subscribe to our source observable
    const subscription = dataSource
      .pipe(
        // add 1 to each emitted value
        map(value => value + 1),
        filter(value => value <= 4)
      )
      // log: 2, 3, 4, 5, 6

      .subscribe(value => console.log(value));
  }
}
