import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryCardComponent } from './components/brewery-card/brewery-card.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryCardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BreweryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
