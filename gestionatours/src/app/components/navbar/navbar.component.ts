import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService,
              private _sRouter:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);

      this.loggedIn = (user != null);
    });
  }
  signOut(): void {
    this.authService.signOut();
  }

  TourxDep(){ //byJorge
    console.log('se hio click en busque da x dep y -....')
    this._sRouter.navigate(['/tourxdep'] )
  }
  

}
