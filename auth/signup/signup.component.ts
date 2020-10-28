import { Component, OnInit, OnDestroy } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../auth.service";
import { BoundData } from "src/app/shared/interfaces";
import { UpdateComponent } from "src/app/shared/update/update.component";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["../auth.component.scss"],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  dictionary = GR;
  private signUpSub = new Subscription();
  private boundDataSub = new Subscription();
  private boundUsernamesList: string[] = [];
  private boundEmailsList: string[] = [];
  private boundRobotsList: string[] = [];

  constructor(private service: AuthService, public dialog: MatDialog) {}

  //Gets all the usernames and emails from database
  private GetBoundData() {
    this.boundDataSub = this.service
      .getBoundUserData()
      .subscribe((resData: BoundData) => {
        resData.userData.forEach((element) => {
          this.boundUsernamesList.push(element.username);
          this.boundEmailsList.push(element.email);
        });
        resData.robotsSerial.forEach((element) => {
          this.boundRobotsList.push(element.robotSerialNumber);
        });
      });
  }

  userData: [{ username: string; email: string }];
  robotsSerial: [{ robotSerialNumber: string }];

  //initialize forms and validators for each field
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.boundNames.bind(this),
      ]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        this.boundEmails.bind(this),
      ]),
      password: new FormControl(null, Validators.required),
      robotSerialNumber: new FormControl(null, [
        Validators.required,
        this.boundRobots.bind(this),
      ]),
    });
    this.GetBoundData();
  }

  ngOnDestroy(): void {
    this.boundDataSub.unsubscribe();
    this.signUpSub.unsubscribe();
  }

  //function on click of sign up btn
  onSignUp() {
    //send data to service
    this.signUpSub = this.service.signUpUser(this.signUpForm.value).subscribe();
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: "300px",
      height: "200px",
      data: {
        title: this.dictionary.auth.report.title,
        msg: this.dictionary.auth.report.content,
      },
    });
    dialogRef.afterClosed();
    this.signUpForm.reset();
    this.GetBoundData();
  }

  //Checks if username is already used by another user
  boundNames(control: FormControl): { [s: string]: boolean } {
    if (this.boundUsernamesList.indexOf(control.value) !== -1) {
      return { nameIsBound: true };
    }
    return null;
  }

  //Checks if email is already registered
  boundEmails(control: FormControl): { [s: string]: boolean } {
    if (this.boundEmailsList.indexOf(control.value) !== -1) {
      return { emailIsBound: true };
    }
    return null;
  }

  boundRobots(control: FormControl): { [s: string]: boolean } {
    if (this.boundRobotsList.indexOf(control.value) === 1) {
      return { robotNotExists: true };
    }
    return null;
  }

  LoadData() {
    this.signUpForm.setValue({
      username: "Test",
      firstName: "Test",
      lastName: "Test",
      email: "test@test.se",
      password: "1234567",
      robotSerialNumber: "123456789",
    });
  }
}
