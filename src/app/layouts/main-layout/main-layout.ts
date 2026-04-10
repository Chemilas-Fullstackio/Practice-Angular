import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tab } from '../../models/tab.model';
import { NavbarComponent } from '../../shared/components/navbar/navbar';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent],
    template: `
    <app-navbar [navigationTabs]="tabs" [brandName]="'AgriPro'"></app-navbar>
    <router-outlet></router-outlet>
    `
})

export class MainLayout {
    tabs: Tab[] = [
        { label: 'Home', route: '/' },
        { label: 'Service', route: '/service' },
        { label: 'Blog', route: '/blog' },
        { label: 'About Us', route: '/about-us' }
    ];
}

