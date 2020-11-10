import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  title = 'HTTP Example Original';

  constructor() {
    // this.changeTitle(this.setTitle);
    this.onComplete().then(this.setTitle);
  }

  ngOnInit(): void {}

  private setTitle = () => {
    this.title = 'Hello Angular 10';
  };

  private changeTitle(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
