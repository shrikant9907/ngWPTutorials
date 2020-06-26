import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

     // this.navData.getHeaderNav().subscribe(data => {
      //   this.navItems = data;
      // });

      // this.navItems = this.data.getHeaderNav();

  }

}
