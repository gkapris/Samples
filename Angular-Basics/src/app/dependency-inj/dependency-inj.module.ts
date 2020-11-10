import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { ExampleFavComponent } from './example-fav/example-fav.component';
import { ExampleDetailsComponent } from './example-details/example-details.component';

@NgModule({
  declarations: [ExampleComponent, ExampleFavComponent, ExampleDetailsComponent],
  imports: [CommonModule],
  exports: [ExampleComponent],
})
export class DependencyInjModule {}
