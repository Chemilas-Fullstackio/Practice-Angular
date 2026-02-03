import {Component, Input} from '@angular/core';
import {Feature} from '../../models/feature';

@Component({
    selector: 'app-feature-card',
    standalone: true,
    templateUrl: './feature-card.html',
    styleUrls: ['./feature-card.css']
})
export class FeatureCardComponent {
    @Input({required: true}) data!: Feature;
}