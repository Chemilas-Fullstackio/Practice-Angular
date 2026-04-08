import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stats',
  imports: [MatIconModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})

export class Stats {
  stats: Stat[] = [
    { icon: 'headphones', value: '95%', label: 'Customer satisfaction' },
    { icon: 'emoji_events', value: '500+', label: 'Winning award' },
    { icon: 'check', value: '1000+', label: 'Successful Projects' },
    { icon: 'calendar_today', value: '15+', label: 'Years of experience' }
  ]
}

interface Stat {
  icon: string;
  value: string;
  label: string;
}