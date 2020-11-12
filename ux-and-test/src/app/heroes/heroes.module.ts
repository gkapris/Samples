import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { NewHeroFormComponent } from './new-hero-form/new-hero-form.component';

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, NewHeroFormComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
