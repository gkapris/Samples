import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }
