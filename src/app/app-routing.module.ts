import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'breweries', component: BreweryListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
