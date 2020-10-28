import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GR } from "src/app/shared/dictionary";
import { User } from "../user.model";
import { Robot } from "src/app/robot/robot.model";
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from 'src/app/shared/update/update.component';
import { UserService } from '../user.service';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  dictionary = GR;
  isLoading = false;
  mode = "create";
  private userId: string;
  existingRobots: Robot[];
  // fetch by service
  boundedUsernames = ["user1", "user2"];
  //

  constructor(public dialog: MatDialog, private service: UserService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(null),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        this.boundUsernames.bind(this),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.email,
      ]),
    });

    this.isLoading = true;
    this.service
      .getProfile()
      .subscribe((userData: { message: string; user: User }) => {
        this.userForm.patchValue({
          id: userData.user.id,
          username: userData.user.username,
          password: userData.user.password,
          firstName: userData.user.firstName,
          lastName: userData.user.lastName,
          email: userData.user.email,
        });
        this.isLoading = false;
      });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.service.putUpdateProfile(this.userForm.value);
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: "300px",
      height: "180px",
      data: { title: this.dictionary.update.title ,msg: this.dictionary.update.updateMsg },
    });

    dialogRef.afterClosed()
  }

  boundUsernames(control: FormControl): { [s: string]: boolean } {
    if (this.boundedUsernames.indexOf(control.value) !== -1) {
      return { nameIsBound: true };
    }
    return null;
  }
}
