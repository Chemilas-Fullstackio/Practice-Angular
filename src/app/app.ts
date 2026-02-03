// import {Component, signal} from '@angular/core';
// import {RouterOutlet} from '@angular/router';

import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { FeatureCardComponent } from './components/feature-card/feature-card';
import { Feature } from './models/feature';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NavbarComponent, HeroComponent, FeatureCardComponent],
    template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>

    <section class="features-grid">
        @for (item of featureList; track item.title) {
            <app-feature-card [data]="item"></app-feature-card>
        } @empty {
            <p>No features found!</p>
        }
    </section>
  `,
    styles: [`
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 50px 10%;
      background: #f9f9f9;
    }
  `]
})
export class App {
    featureList: Feature[] = [
        { title: 'Fast', description: 'Optimized for speed and performance.' },
        { title: 'Clean', description: 'Minimalist design that looks great everywhere.' },
        { title: 'Responsive', description: 'Works perfectly on phones and desktops.' }
    ];
}

// @Component({
//     selector: 'app-root',
//     template: `Hello {{ city }}`,
//     // imports: [RouterOutlet],
//     // templateUrl: './app.html',
//     // styleUrl: './app.css'
//     styles: `:host {
//         color: #a144eb;
//     }`
// })
// export class App {
//     city = 'San Francisco'
//     protected readonly title = signal('angular-project');
// }