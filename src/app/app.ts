import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Home } from "./features/home/home";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Home],
  template: `
    <app-home></app-home>
  `,
  styles: [``]
})

export class App {
  
}