import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { TutorialsRoutingModule } from './tutorials-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SingleComponent } from './pages/single/single.component';
import { NavbarComponent } from './common/navbar/navbar.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, CategoryComponent, SingleComponent, NavbarComponent],
  imports: [
    CommonModule,
    TutorialsRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ]
})
export class TutorialsModule { }
