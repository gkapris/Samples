import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-elegant-login',
  templateUrl: './elegant-login.component.html',
  styleUrls: ['./elegant-login.component.css'],
})
export class ElegantLoginComponent implements OnInit {
  loginForm = new FormGroup({});

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {}

  private buildForm(): void {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}
