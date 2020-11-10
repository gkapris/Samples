import { Component, Input, OnInit } from '@angular/core';
import { Example } from '../example';
import { ExampleDetailService } from './example-detail.service';

@Component({
  selector: 'app-example-details',
  templateUrl: './example-details.component.html',
  styleUrls: ['./example-details.component.scss'],
  providers: [ExampleDetailService],
})
export class ExampleDetailsComponent implements OnInit {
  hero: Example;
  @Input() heroId: number;

  constructor(private heroService: ExampleDetailService) {}

  ngOnInit(): void {
    this.hero = this.heroService.getHero(this.heroId);
  }
}
