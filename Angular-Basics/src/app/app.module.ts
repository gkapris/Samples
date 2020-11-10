import { HttpHandlingModule } from './http-handling/http-handling.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { CssStylingComponent } from './css-styling/css-styling.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortPipe } from './pipes/sort.pipe';
import { CopyrightDirective } from './directives/copyright.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './directives/permission.directive';
import { TestingModulesModule } from './testing-modules/testing-modules.module';
import { DependencyInjModule } from './dependency-inj/dependency-inj.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/DataService/data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    CssStylingComponent,
    LifecycleComponent,
    DirectivesComponent,
    PipesComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
  ],
  imports: [
    BrowserModule,
    TestingModulesModule,
    DependencyInjModule,
    HttpHandlingModule,
    HttpClientModule,
    RoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
