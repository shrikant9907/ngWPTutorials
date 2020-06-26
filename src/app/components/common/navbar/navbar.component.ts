import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() navItems: object;
  isLoggedIn: boolean;
  siteName: string;
  showLogo: boolean = false;

  constructor(
    private authService: AuthService,
    private shareDataService: ShareDataService,
    public router: Router
  ) {
    this.siteName = this.shareDataService.siteName;
    this.showLogo = this.shareDataService.showHeaderLogo;
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logOut();
  }

}
