import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicButtonsRoutingModule } from './basic-buttons-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    BasicButtonsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
})
export class BasicButtonsModule {}
