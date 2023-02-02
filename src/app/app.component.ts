import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  role =  "";
  constructor( public authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {

  }

  public logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
    this.authService.isUserLogin =  false;
  }
}
