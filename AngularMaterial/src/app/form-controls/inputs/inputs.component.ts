import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Model, itemsList } from '../model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
})
export class InputsComponent implements OnInit {
  name = new FormControl('', Validators.required);
  items: Model[] = itemsList;
  filteredList$: Observable<Model[]>;

  constructor() {}

  ngOnInit(): void {
    this.filteredList$ = this.name.valueChanges.pipe(
      map((name) => this.items.filter((item) => item.name.startsWith(name)))
    );
  }
}
