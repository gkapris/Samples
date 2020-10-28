import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { delay, share, map } from "rxjs/operators";

import { URL } from "../shared/requestULRs";

@Injectable({ providedIn: "root" })
export class UserService {
  private fetchedUsers = new Subject<User[]>();
  private userList: User[];

  constructor(private http: HttpClient, private router: Router) {}

  // USER SERVICES //
  // Making requests to the backend using routes/user
  getUserUpdate() {
    return this.fetchedUsers.asObservable();
  }

  getUsersList() {
    this.http
      .get(URL.getUserListURL)
      .pipe(
        map((responseData) => {
          const userArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              userArray.push({ ...responseData[key], userId: key });
            }
          }
          return userArray;
        })
      )
      .subscribe((resData: User[]) => {
        this.userList = resData;
        this.fetchedUsers.next([...this.userList]);
      });
  }

  postCreateUser(postData: User) {
    console.log(postData);
    this.http.post(URL.createUserURL, postData).subscribe((user: User) => {
      this.userList.push(postData);
    });
    this.router.navigate(["UserList"]);
  }

  putUpdateProfile(user: User) {
    this.http.put(URL.putUpdateProfileURL, user).subscribe((user: User) => {});
  }

  putUpdateUser(user: User) {
    this.http.put(URL.editUserURL, user).subscribe((user: User) => {
      const updatedUsers = [...this.userList];
      const oldUserIndex = updatedUsers.findIndex((u) => u.id === user.id);
      updatedUsers[oldUserIndex] = user;
      this.userList = updatedUsers;
      this.fetchedUsers.next([...this.userList]);
    });
    this.router.navigate(["UserList"]);
  }

  deleteUser(id?: string) {
    this.http.delete(URL.deleteUserURL + id).subscribe(() => {
      const updatedUsers = this.userList.filter(
        (userFiltered) => userFiltered.id !== id
      );
      this.userList.forEach((element) => {
        if (element.id === id) {
          element.is_active = false;
        }
      });
      this.userList = updatedUsers;
      this.fetchedUsers.next([...this.userList]);
    });
  }

  getProfile(id?: string) {
    return this.http.get(URL.getProfileURL);
  }

  getUserById(id?: string) {
    return this.http.get(URL.getUserByIdURL + id);
  }
}
