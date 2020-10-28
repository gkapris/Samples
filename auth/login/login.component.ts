import { Component, OnInit } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["../auth.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  dictionary = GR;

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onLogin() {
    this.service.loginUser(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }

  loadData() {
    this.loginForm.setValue({ username: "Admin", password: "1234567" });
  }
}
