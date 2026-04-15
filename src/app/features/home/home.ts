import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/components/hero/hero";
import { Stats } from '../stats/stats';
import { Services } from "../services/services";
import { Methods } from "../methods/methods";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, Stats, Services, Methods],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  
}