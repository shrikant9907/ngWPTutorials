import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './pages/single/single.component';
import { CategoryComponent } from './pages/category/category.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tutorial-category',
    component: CategoryComponent
  },
  {
    path: 'tutorial',
    component: SingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialsRoutingModule { }
