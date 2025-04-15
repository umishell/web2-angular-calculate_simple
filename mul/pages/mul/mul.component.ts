import { Component } from '@angular/core';
import { MulService } from '../../services/mul.service';

@Component({
  selector: 'app-mul',
  imports: [],
  templateUrl: './mul.component.html',
  styleUrl: './mul.component.css'
})
export class MulComponent {
  private res :number = 0;

  constructor(private mulService: MulService) { }

  get result(): string {
    return this.res.toString();
  }

  mul(num1: string, num2: string): void {
    this.res = this.mulService.mul(parseFloat (num1), parseFloat(num2));
  }
}
