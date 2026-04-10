import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/components/hero/hero";
import { Stats } from '../stats/stats';
import { Services } from "../services/services";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, Stats, Services],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  
}