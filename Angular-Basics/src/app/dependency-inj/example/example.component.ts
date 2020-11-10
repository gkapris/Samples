import { ExampleService } from './../example.service';
import { Component, OnInit } from '@angular/core';
import { Example } from '../example';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  // providers: [ExampleService],
  viewProviders: [ExampleService],
})
export class ExampleComponent implements OnInit {
  heroes: Example[];

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.heroes = this.exampleService.getHeroes();
  }
}
