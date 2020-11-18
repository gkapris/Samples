import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicButtonsModule } from './basic-buttons/basic-buttons.module';
import { FormControlsModule } from './form-controls/form-controls.module';
import { NavModule } from './nav/nav.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BasicButtonsModule,
    FormControlsModule,
    NavModule,
    TablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
