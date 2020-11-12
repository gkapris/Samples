import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ReservedNameValidator } from './reserved-name.directive';

@Component({
  selector: 'app-new-hero-form',
  templateUrl: './new-hero-form.component.html',
  styleUrls: ['./new-hero-form.component.css'],
})
export class NewHeroFormComponent implements OnInit {
  heroDetails = new FormGroup({
    name: new FormControl('', [Validators.required, ReservedNameValidator()]),
    realName: new FormControl(''),
    biometricData: new FormGroup({
      age: new FormControl(''),
      eyes: new FormControl(''),
      hair: new FormControl(''),
    }),
    powers: new FormArray([]),
  });
  constructor() {}

  ngOnInit(): void {}

  get powers(): FormArray {
    return this.heroDetails.controls.powers as FormArray;
  }

  addPower(): void {
    this.powers.push(new FormControl(''));
  }
}
