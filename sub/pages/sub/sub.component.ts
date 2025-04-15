import { Component } from '@angular/core';
import { SubService } from '../../services';

@Component({
  selector: 'app-sub',
  imports: [],
  templateUrl: './sub.component.html',
  styleUrl: './sub.component.css'
})
export class SubComponent {
  private res : number = 0;

  constructor(private subService: SubService) { }

  get result(): string {
    return this.res.toString();
  }

  sub(num1: string, num2: string): void {
    this.res = this.subService.sub(parseFloat(num1), parseFloat(num2));
  }

}
