import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ListComponent } from './list/list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [PromisesComponent, ObservablesComponent, ListComponent],
  imports: [CommonModule],
  exports: [PromisesComponent, ObservablesComponent, ListComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class HttpHandlingModule {}
