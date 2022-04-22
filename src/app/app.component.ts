import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from './_auth/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   pageTitle = 'Slinfy';

  sideBarOpen = true

  _route_url = "/home"
  fname: any;
  lname: any;


  constructor(private router:Router, public auth: AuthenticationService, private title: Title) { }

  ngOnInit() {
 this.title.setTitle(this.pageTitle)

    //fetch user token and decode
    // let Token = this.auth.getToken();
    //console.log('User token', Token);
    // var decoded = jwt_decode(Token);
    // console.log("Decoded", decoded)
    // this.fname = decoded.fname
    // this.lname = decoded.lname

   }

  hasRoute(route: string) {

    return this.router.url.includes(route)
  }
}
