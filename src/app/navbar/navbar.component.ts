import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Typescript Class Objects
class NavClass {
  constructor(public path: string, public title: string) { }
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent {

  links:NavClass[] = [];

  activeLink: NavClass = new NavClass('', '');
  
  constructor(private router: Router) { 
    this.links = [{ title: 'Home', path: '/home' }, { title: 'Map', path: '/register' }, { title: 'Job Schedule', path: 'gantt' }];
    this.activeLink = this.links[0];
  }


  switchTab(link: NavClass) {
    this.activeLink = link;
    this.router.navigateByUrl(link.path);
  }

}


