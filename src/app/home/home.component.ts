import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public role: any;
  ngOnInit(): void {  
    let userInfo = JSON.parse( localStorage.getItem('userData')!);
    this.role =  userInfo.role;
  }


}
