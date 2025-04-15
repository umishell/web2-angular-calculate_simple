import { Component } from '@angular/core';
import { DivComponent } from './pages/div';

@Component({
  selector: 'app-root',
  imports: [DivComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'div';
}
