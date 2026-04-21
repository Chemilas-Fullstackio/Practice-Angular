import { Component } from '@angular/core';
import { HeroComponent } from "../../shared/components/hero/hero";
import { Stats } from '../stats/stats';
import { Services } from "../services/services";
import { Methods } from "../methods/methods";
import { PartnerBenefits } from "../partner-benefits/partner-benefits";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, Stats, Services, Methods, PartnerBenefits],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {
  
}