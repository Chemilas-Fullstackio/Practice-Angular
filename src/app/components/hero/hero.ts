import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class HeroComponent {
  heroTitle = 'Welcome to Your Future';
  heroSubtitle = 'A simple, elegant design built in Angular.';

  onGetStarted() {
    console.log('The button was clicked!');
    alert('Welcome! Let’s start practicing Angular.');
  }
}
