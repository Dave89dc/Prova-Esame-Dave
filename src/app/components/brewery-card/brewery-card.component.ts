import { Component, Input } from '@angular/core';
import { Brewery } from 'src/app/models/brewery/brewery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.scss']
})
export class BreweryCardComponent {

  @Input() brewery?: Brewery;

  constructor(private dataService: DataService){}



}
