import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  constructor(private router : Router) { }
  ngOnDestroy(): void {
    this.logout()
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
