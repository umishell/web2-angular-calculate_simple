import { Component } from '@angular/core';
import { SumService } from '../../services';

@Component({
  selector: 'app-sum',
  imports: [],
  templateUrl: './sum.component.html',
  styleUrl: './sum.component.css'
})
export class SumComponent {
  private res : number = 0;

  constructor(private sumService: SumService) { }

  get result(): string {
    return this.res.toString();
  }

  sum(num1: string, num2: string): void {
    this.res = this.sumService.sum(parseFloat(num1),parseFloat(num2));
  }

}
