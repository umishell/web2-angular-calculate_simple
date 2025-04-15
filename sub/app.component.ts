import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubComponent } from './pages/sub';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sub';
}
