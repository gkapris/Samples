import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlsRoutingModule } from './form-controls-routing.module';
import { InputsComponent } from './inputs/inputs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DateFormComponent } from './date-form/date-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [InputsComponent, DateFormComponent],
  imports: [
    CommonModule,
    FormControlsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class FormControlsModule {}
