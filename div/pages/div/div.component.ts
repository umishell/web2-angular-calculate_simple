import { Component } from '@angular/core';
import { DivService } from '../../services';

@Component({
  selector: 'app-div',
  imports: [],
  templateUrl: './div.component.html',
  styleUrl: './div.component.css'
})
export class DivComponent {
  private res: number = 0;

  constructor(private divService: DivService) { }

  get result(): string {
    return this.res.toString();
  }

  div(num1: string, num2: string): void {
    this.res = this.divService.div(parseFloat(num1), parseFloat(num2));
  }
}
