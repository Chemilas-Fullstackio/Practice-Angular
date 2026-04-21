import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-partner-benefits',
  imports: [MatIcon],
  templateUrl: './partner-benefits.html',
  styleUrl: './partner-benefits.scss',
})
export class PartnerBenefits {
  items: Benefit[] = [
    { icon: 'settings', title: 'advanced tools and technology' },
    { icon: 'group', title: 'personalized support and expertise' },
    { icon: 'build', title: 'sustainable farming practices' },
    { icon: 'phone_in_talk', title: 'networking and community support' },
  ]
}

interface Benefit {
  icon: string,
  title: string
}
