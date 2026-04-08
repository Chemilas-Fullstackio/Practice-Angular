import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgStyle],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})

export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() buttonText: string = '';
  @Input() imageUrl: string = '';

  onGetStarted() {
    console.log('The button was clicked!');
  }

}
