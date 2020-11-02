import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-css-styling',
  templateUrl: './css-styling.component.html',
  styleUrls: ['./css-styling.component.scss'],

  // Method to utilize the css code in the DOM
  // encapsulation: ViewEncapsulation.Emulated,

  // Changes component only when input changes - best for large scale apps
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssStylingComponent implements OnInit {
  constructor() {}

  @Input() name: string;

  ngOnInit(): void {}
}
