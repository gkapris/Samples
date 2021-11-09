import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

import { MissionsModule } from '../missions/missions.module';
import { HeroComponent } from './create-hero/create-hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [HeroComponent, HeroDetailComponent, HeroesComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    MissionsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class HeroesModule {}
