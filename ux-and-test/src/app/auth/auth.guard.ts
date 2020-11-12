import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroDetailComponent } from '../heroes/hero-detail/hero-detail.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements CanActivate, CanDeactivate<HeroDetailComponent>, CanLoad {
  private isAuthenticated = true;

  constructor(private router: Router) {}

  // Auth guard for accessing a component
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLogin();
  }

  // Auth guard for leaving a component
  canDeactivate(
    component: HeroDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.showConfirm();
  }

  // Auth guard for authentication with lazy loading
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | UrlTree
    | boolean {
    return this.checkLogin();
  }

  // Functions that implement the business logic of authorization

  private showConfirm(): Observable<boolean> {
    const confirmation = window.confirm('Are you sure ?');
    return of(confirmation);
  }

  private checkLogin(): boolean {
    if (this.isAuthenticated) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
