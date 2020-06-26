import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.navItems = [
      {
        'name': 'Home',
        'link': '/',
        'classes': 'active'
      },
      {
        'name': 'Tutorials',
        'link': '/tutorials',
        'classes': ''
      },
      {
        'name': 'Interview Questions',
        'link': '/interview-questions',
        'classes': ''
      },
      {
        'name': 'Snippets',
        'link': '/snippets',
        'classes': ''
      },
      // {
      //   'name': 'Blog',
      //   'link': '/blog',
      //   'classes': ''
      // }
    ];

  }

}
