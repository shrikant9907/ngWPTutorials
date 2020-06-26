import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { SingleComponent } from './components/pages/single/single.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'interview-questions',
    component: HomeComponent
  },
  {
    path: 'snippets',
    component: HomeComponent
  },
  {
    path: 'tutorials-category:name',
    component: CategoryComponent
  },
  {
    path: 'details:id',
    component: SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
