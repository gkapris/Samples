import { RobotService } from "./../../robot/robot.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GR } from "src/app/shared/dictionary";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "../user.model";
import { Robot } from "src/app/robot/robot.model";
import { UserService } from "../user.service";

@Component({
  selector: "app-users-form",
  templateUrl: "./usersform.component.html",
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;
  dictionary = GR;
  isLoading = false;
  mode = "create";
  private userId: string;
  existingRobots: Robot[];
  // fetch by service
  boundedUsernames = ["user1", "user2"];
  //

  constructor(
    private route: ActivatedRoute,
    private robotService: RobotService,
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.robotService.getRobotList();
    this.isLoading = true;
    this.robotService.getRobotUpdate().subscribe((robots: Robot[]) => {
      this.isLoading = false;
      this.existingRobots = robots;
    });

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
      isAdmin: new FormControl(false),
      robot: new FormControl(null),
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("userId")) {
        this.mode = "edit";
        this.userId = paramMap.get("userId");
        this.isLoading = true;
        this.service.getUserById(this.userId).subscribe((user: User) => {
          this.userForm.patchValue({
            id: user.id,
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            is_admin: user.is_admin,
          });
        });
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.service.postCreateUser(this.userForm.value);
    } else {
      this.service.putUpdateUser(this.userForm.value);
    }
    this.userForm.reset();
  }

  boundUsernames(control: FormControl): { [s: string]: boolean } {
    if (this.boundedUsernames.indexOf(control.value) !== -1) {
      return { nameIsBound: true };
    }
    return null;
  }

  robotExists(control: FormControl): { [s: string]: boolean } {
    if (this.existingRobots.indexOf(control.value) === -1) {
      return { nameIsBound: true };
    }
    return null;
  }

  LoadData() {
    this.userForm.patchValue({
      username: "test",
      password: "testtest",
      firstName: "test",
      lastName: "test",
      email: "test@test.se",
      isAdmin: false,
    });
  }
}
