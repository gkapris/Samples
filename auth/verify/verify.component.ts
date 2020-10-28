import { Component, OnInit } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from "../auth.service";
import { MatDialog } from "@angular/material/dialog";
import { User } from "src/app/user/user.model";

@Component({
  selector: "app-verify",
  templateUrl: "./verify.component.html",
  styleUrls: ["../auth.component.scss"],
})
export class VerifyComponent implements OnInit {
  dictionary = GR;
  private verifyId: string;
  userData: User;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private service: AuthService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("verifyId")) {
        this.verifyId = paramMap.get("verifyId");
        this.service.onVerify(this.verifyId).subscribe();
      }
    });
  }
}
