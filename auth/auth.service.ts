import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { SignUp } from "./signup/signup.model";
import { Subject, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import { URL } from "../shared/requestULRs";
import { LoginUser, ResetPassword } from "../shared/interfaces";
import { MatDialog } from "@angular/material/dialog";
import { GR } from "src/app/shared/dictionary";
import { AlertComponent } from "../shared/alert/alert.component";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthService {
  dictionary = GR;
  private token: string;
  private isAuthenticated = false;
  private isAdmin = false;
  private authStatusListener = new Subject<boolean>();
  private adminStatusListener = new Subject<boolean>();
  private tokenTimer: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {}

  //Handling Errors Function
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }

  getToken() {
    return this.token;
  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAdminStatusListener() {
    return this.adminStatusListener.asObservable();
  }

  getBoundUserData() {
    return (
      this.http
        .get(URL.getBoundUserData)
        //Handling error response
        .pipe(catchError(this.handleError))
    );
  }

  signUpUser(signUp: SignUp) {
    return (
      this.http
        .post(URL.signUpURL, signUp)
        //Handling error response
        .pipe(catchError(this.handleError))
    );
  }

  loginUser(username: string, password: string) {
    this.http
      .post<LoginUser>(URL.loginURL, {
        username: username,
        password: password,
      })
      //Handling error response
      .pipe(catchError(this.handleError))
      //Listens the response and process the data
      .subscribe((resData?: LoginUser) => {
        this.token = resData.data.token;
        //If user is verified
        if (resData.data.is_active) {
          //If he has a web token
          if (this.token) {
            const expiresInDuration = resData.data.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.isAdmin = resData.data.is_admin;
            if (this.isAdmin) {
              this.adminStatusListener.next(true);
            }
            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );

            this.saveAuthData(
              this.isAdmin ? "true" : "false",
              this.token,
              expirationDate
            );
            this.router.navigate(["ScenarioList"]);
          }
        } else {
          const dialogRef = this.dialog.open(AlertComponent, {
            width: "300px",
            height: "180px",
            data: {
              title: this.dictionary.auth.dialogTitle,
              msg: this.dictionary.auth.dialogContent,
            },
          });
          dialogRef.afterClosed();
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    const now = new Date();
    if (authInformation) {
      const expiresIn =
        authInformation.expirationDate.getTime() - now.getTime();
      if (expiresIn > 0) {
        this.token = authInformation.token;
        this.isAuthenticated = true;
        this.setAuthTimer(expiresIn / 1000);
        this.authStatusListener.next(true);
        if (authInformation.is_admin === "true") {
          this.isAdmin = true;
          this.adminStatusListener.next(true);
        }
        this.router.navigate(["ScenarioList"]);
      }
    }
  }

  onLogout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    if (this.isAdmin) {
      this.isAdmin = false;
      this.adminStatusListener.next(false);
    }
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
    this.router.navigate([""]);
  }

  //Service function to call backend verification of user based on verification id
  onVerify(verifyId: string) {
    return (
      this.http
        .post(URL.verifyURL + verifyId, null)
        //Handling error response
        .pipe(catchError(this.handleError))
    );
  }

  //Password Reset
  passwordReset(dataForm: ResetPassword) {
    return (
      this.http
        .post(URL.resetPasswordURL, dataForm)
        //Handling error response
        .pipe(catchError(this.handleError))
    );
  }

  //Username Reminder Method
  usernameReminder(dataForm: { email: string }) {
    return (
      this.http
        .post(URL.usernameReminderURL, dataForm)
        //Handling error response
        .pipe(catchError(this.handleError))
    );
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.onLogout();
    }, duration * 1000);
  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const isAdmin = localStorage.getItem("isAdmin");
    if (!token && !expirationDate) {
      return null;
    }
    return {
      is_admin: isAdmin,
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }

  private saveAuthData(isAdmin: string, token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    //Maybe remove
    localStorage.setItem("isAdmin", isAdmin);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("isAdmin");
  }
}
