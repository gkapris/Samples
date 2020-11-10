import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { from, fromEvent, Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnInit {
  title = 'Observables Example';
  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  keys = '';
  @ViewChild('keyContainer', { static: true }) input: ElementRef;

  constructor() {
    // this.title$.subscribe(this.setTitle);
  }

  ngOnInit(): void {
    // basic functions of Observables
    const values = from([1, 2, 3]);
    values.subscribe((value) => console.log(value));

    const obsComplete = from(this.onComplete());
    obsComplete.subscribe(this.setTitle);

    // Key input logger
    const logger = fromEvent(this.input.nativeElement, 'keyup');
    logger
      .pipe(
        map((evt: KeyboardEvent) => evt.key.charCodeAt(0)),
        filter((code) => {
          if (this.keys) {
            return !(code > 31 && (code < 48 || code > 57));
          }
          return true;
        }),
        tap((digit) => (this.keys += String.fromCharCode(digit)))
      )
      .subscribe();
  }

  private onComplete(): Promise<any> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
  };
}
