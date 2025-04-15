import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MulComponent } from './pages/mul';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MulComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mul';
}
