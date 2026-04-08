import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar";
import { HeroComponent } from "../../components/hero/hero";
import { Stats } from '../../components/stats/stats';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, Stats],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

}