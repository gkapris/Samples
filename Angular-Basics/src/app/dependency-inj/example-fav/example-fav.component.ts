import { ExampleService } from './../example.service';
import { Component, Host, OnInit, Optional } from '@angular/core';
import { Example } from '../example';

@Component({
  selector: 'app-example-fav',
  templateUrl: './example-fav.component.html',
  styleUrls: ['./example-fav.component.scss'],
})
export class ExampleFavComponent implements OnInit {
  heroes: Example[];

  constructor(@Host() @Optional() private exampleService: ExampleService) {}

  ngOnInit(): void {
    this.heroes = this.exampleService.getHeroes();
  }
}
