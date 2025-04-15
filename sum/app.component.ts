import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SumComponent } from './pages/sum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sum';
}
