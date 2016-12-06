import { Component } from '@angular/core';
import { Router } from '@angular/router';

class NavItem{
  name: String;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItems: NavItem[] = [
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
  constructor(private router: Router){
   
  }
  onSelect(navItem: NavItem){
      this.router.navigate([navItem.route])
  }
}
