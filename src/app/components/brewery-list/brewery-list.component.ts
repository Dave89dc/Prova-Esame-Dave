import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

import { Brewery } from 'src/app/models/brewery/brewery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent implements OnInit{

  breweries: Brewery[] = [];
  breweriesCopy: Brewery[] = [];
  states: string[] = ['All States']
  value?: string;
  state?: string;
  page: number = 1;
  pageSize: number = 10;

  constructor(public dataService: DataService, private paginationConfig: NgbPaginationConfig){}

  ngOnInit(): void {
    this.paginationConfig.pageSize = 8;
    this.allBreweries();
  }

  allBreweries(){
    this.dataService.getAllBreweries().subscribe({
      next: breweries => {
        this.breweries = breweries;
        this.breweriesCopy = [...this.breweries];
        for (let i = 0; i < this.breweries.length; i++) {
          const brewery = this.breweries[i];
          this.states.push(brewery.state);
        }
        this.states = Array.from(new Set(this.states));
      },
      error: err => console.log('Error: ', err)
    });
  }

  filterByName(){
    if(this.value){
      this.dataService.getAllBreweries().subscribe({
        next: breweries => this.breweriesCopy = breweries.filter(brewery => brewery.name === this.value),
        error: err => console.log('Error: ', err)
      });
    }
    this.page = 1;
  }

  filterByState(){
    if(this.state && this.state !== this.states[0]){
      this.dataService.getAllBreweries().subscribe({
        next: breweries => {
          this.breweriesCopy = breweries.filter(brewery => brewery.state === this.state);
        },
        error: err => console.log('Error: ', err)
      });
    } else{
      this.allBreweries()
    }
    this.page = 1;
  }

}
