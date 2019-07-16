import { Component, OnInit } from '@angular/core';
import { of, concat, merge, interval, zip } from 'rxjs';
import {
  map,
  filter,
  delay,
  pluck,
  mergeMap,
  concatMap,
  switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'example10';

  ngOnInit() {
    const dataSource = of(1, 2, 3, 4, 5);
    const dataSource2 = of(10, 20, 30, 40, 50);
    const t = interval(500);
    const t2 = interval(1000);

    const ds1 = zip(t, dataSource).pipe(pluck(1));
    const ds2 = zip(t2, dataSource2).pipe(pluck(1));
    // subscribe to our source observable

    ds1
      .pipe(
        switchMap(v => {
          console.log(v);
          return ds2;
        })
      )
      .subscribe(value => console.log(value));
  }
}
