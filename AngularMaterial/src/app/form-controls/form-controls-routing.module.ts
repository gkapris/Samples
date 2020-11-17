import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputsComponent } from './inputs/inputs.component';
import { DateFormComponent } from './date-form/date-form.component';

const routes: Routes = [
  { path: 'inputs', component: InputsComponent },
  { path: 'date-form', component: DateFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormControlsRoutingModule {}
