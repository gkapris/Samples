import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    children: [{ path: ':id', component: HeroDetailComponent }],
  },
  // { path: 'hero/:id', component: HeroDetailComponent },
  // { path: 'hero', component: HeroDetailComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
