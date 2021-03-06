import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomPreloadingService } from './auth/custom-preloading.service';
import { LoginComponent } from './login/login.component';
import { ElegantLoginComponent } from './elegant-login/elegant-login.component';

const routes: Routes = [
  // Lazy loading route with authorization check via auth guard
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    data: { preload: true },
  },
  {
    path: 'login',
    component: LoginComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    // canDeactivate: [AuthGuard],
    data: { preload: true },
  },
  {
    path: 'elegant-login',
    component: ElegantLoginComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    // canDeactivate: [AuthGuard],
    data: { preload: true },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingService,
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
