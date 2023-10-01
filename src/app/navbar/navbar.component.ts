import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Typescript Class Objects
class navClass {
  constructor(public path: string, public title: string) {}
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links: navClass[] = [];

  activeLink: navClass = new navClass('', '');

  constructor(private router: Router) {
    this.links = [
      { title: 'Home', path: '/home' },
      { title: 'Map', path: '/map' },
      { title: 'Job Schedule', path: '/gantt' },
    ];
    this.activeLink = this.links[0];
  }

  switchTab(link: navClass) {
    this.activeLink = link;
    this.router.navigateByUrl(link.path);
  }
}
