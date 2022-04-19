import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLogin: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  loginOnClick(): void {
    if (this.isLogin) {
        this.isLogin = false;
    } else {
       this.isLogin = true;
    }

    }
}
