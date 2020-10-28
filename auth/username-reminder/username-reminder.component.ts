import { Component, OnInit, OnDestroy } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { AuthService } from "../auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpdateComponent } from "src/app/shared/update/update.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-username-reminder",
  templateUrl: "./username-reminder.component.html",
  styleUrls: ["../auth.component.scss"],
})
export class UsernameReminderComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  dictionary = GR;
  private usernameReminderSub = new Subscription();

  constructor(
    public dialog: MatDialog,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnDestroy() {
    this.usernameReminderSub.unsubscribe();
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      new Error("Invalid Data");
    } else {
      this.usernameReminderSub = this.service
        .usernameReminder(this.dataForm.value)
        .subscribe();
      const dialogRef = this.dialog.open(UpdateComponent, {
        width: "300px",
        height: "200px",
        data: {
          title: this.dictionary.usernameRmdr.dialog.title,
          msg: this.dictionary.usernameRmdr.dialog.content,
        },
      });
      dialogRef.afterClosed();
      this.router.navigate([""]);
    }
  }
}
