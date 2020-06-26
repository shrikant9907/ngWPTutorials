import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  siteName = 'Tutorials';
  showHeaderLogo = false;

  constructor(
    private httpService: HttpService
  ) { }

  homeCards() {
    return [
      {
        title: 'Python',
        imgUrl: '../../../../assets/images/tutorials-logo/python.png',
        desc: 'Python is one of the most popular programming language. Learn it for free here.',
        link: '/tutorials-category/python',
      },
      {
        title: 'Django',
        imgUrl: '../../../../assets/images/tutorials-logo/django.png',
        desc: 'Django is one of the most popular programming language. Learn it for free here.',
        link: '/tutorials-category/django',
      },
      {
        title: 'PHP',
        imgUrl: '../../../../assets/images/tutorials-logo/php.png',
        desc: 'PHP is one of the most popular programming language. Learn it for free here.',
        link: '/tutorials-category/php',
      },
      {
        title: 'WordPress',
        imgUrl: '../../../../assets/images/tutorials-logo/wordpress.png',
        desc: 'WordPress is one of the most popular CMS. Learn it for free here.',
        link: '/tutorials-category/wordpress',
      }
    ];
  }
}
