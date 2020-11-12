import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { HeroDetailResolverService } from './hero-detail-resolver.service';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    // children: [{ path: ':id', component: HeroDetailComponent }],
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    resolve: { hero: HeroDetailResolverService },
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
