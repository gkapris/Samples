import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { GR } from "src/app/shared/dictionary";
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../user.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { AlertComponent } from "src/app/shared/alert/alert.component";
import { Subscription } from "rxjs";
import { UserService } from "../user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./userslist.component.html",
})
export class UsersListComponent implements OnInit, OnDestroy {
  dictionary = GR;
  isLoading = false;
  userList = new MatTableDataSource<User>();
  private userSub: Subscription;
  displayedColumns = [
    "username",
    "firstName",
    "lastName",
    "email",
    "is_admin",
    "is_active",
    "edit",
  ];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private service: UserService) {}

  ngOnInit(): void {
    this.service.getUsersList();
    this.isLoading = true;
    this.userSub = this.service.getUserUpdate().subscribe((users: User[]) => {
      this.isLoading = false;
      this.userList = new MatTableDataSource<User>(users);
    });
    this.userList.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userList.filter = filterValue.trim().toLowerCase();
  }

  onDelete(id: string): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: "300px",
      height: "180px",
      data: {
        title: this.dictionary.alert.title,
        msg: this.dictionary.alert.alertMsg,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.service.deleteUser(id);
      }
    });
  }
}
