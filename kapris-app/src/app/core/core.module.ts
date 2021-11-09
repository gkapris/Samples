import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from '../material.module';
import { DataService } from './data/data.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    RouterModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class CoreModule {}
