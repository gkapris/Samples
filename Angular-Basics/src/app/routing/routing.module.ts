import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example3Component } from './example3/example3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'heroes', component: Example3Component },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [Example3Component, PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [Example3Component, PageNotFoundComponent],
})
export class RoutingModule {}
