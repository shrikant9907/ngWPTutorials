import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/services/share-data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardTutorials: any;
  homeCards: any;

  constructor(
    private shareDataService: ShareDataService,
    private httpService: HttpService
  ) {
    this.homeCards = this.shareDataService.homeCards();
  }

  ngOnInit(): void {
    this.getTutorialsList();
  }

  getTutorialsList(category = '28', order = 'desc', orderby = 'id', limit = '5') {
    this.httpService.get(
      `wp-json/wp/v2/tutorial?tutorial_cat=${category}&order=${order}&orderby=${orderby}&per_page=${limit}`
      ).subscribe((response: any) => {
      if (response) {
        // TODO
        console.warn(response);
      }
    });
  }
}
