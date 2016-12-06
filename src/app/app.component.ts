import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems = [
    {
      'name': 'Welecome',
      'route': '/welcome'
    },
    {
      'name': 'Select',
      'route': '/select'
    }
    ];
  title = 'Gift exchange';
}
