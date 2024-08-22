import { Component } from '@angular/core';
import {CardComponent} from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CardComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
