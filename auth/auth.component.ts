import { Component, OnInit } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  dictionary = GR;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
