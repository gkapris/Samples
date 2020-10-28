import { Component, OnInit, OnDestroy } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { AuthService } from "../auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UpdateComponent } from "src/app/shared/update/update.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["../auth.component.scss"],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  dataForm: FormGroup;
  dictionary = GR;
  private passwordResetSub = new Subscription();

  constructor(
    public dialog: MatDialog,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dataForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnDestroy() {
    this.passwordResetSub.unsubscribe();
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      new Error("Invalid Data");
    } else {
      this.passwordResetSub = this.service
        .passwordReset(this.dataForm.value)
        .subscribe();
      const dialogRef = this.dialog.open(UpdateComponent, {
        width: "300px",
        height: "200px",
        data: {
          title: this.dictionary.resetPswd.dialog.title,
          msg: this.dictionary.resetPswd.dialog.content,
        },
      });
      dialogRef.afterClosed();
      this.router.navigate([""]);
    }
  }
}
