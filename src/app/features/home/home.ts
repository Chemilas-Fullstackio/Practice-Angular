import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/components/hero/hero";
import { Stats } from '../stats/stats';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, Stats],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  
}