import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css'],
})
export class DateFormComponent implements OnInit {
  datePick = new FormControl(Date.now(), Validators.required);

  constructor() {}

  ngOnInit(): void {}

  onLoad(): void {
    console.log(this.datePick.value);
  }
}
