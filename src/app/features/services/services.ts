import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  title = 'Our services';

  subtitle: string = "We bridge the gap between tradition and technology, helping farmers <br>achieve their goal with ease";

  services: Service[] = [
    {
      imageUrl: "https://media.licdn.com/dms/image/sync/v2/D5627AQEtn03X_ELHZg/articleshare-shrink_800/B56ZyV9VZfKUAI-/0/1772042410681?e=2147483647&v=beta&t=CdP6cei5YDfYIfNT3m36UY7xZEZNKebA8AlQAmGbZcg",
      title: "Farm Consultancy",
      subtitle: "We provide advice on crop selection, irrigation and pest control."
    },
    {
      imageUrl: "https://about.oceanstatejoblot.com/wp-content/uploads/2024/02/SF_HowDoGreenhousesWork_Introduction.webp",
      title: "Sustainable Practices",
      subtitle: "We specialize in integrating sustainable farming practices."
    },
    {
      imageUrl: "https://www.shutterstock.com/image-photo/drone-shot-tractor-spraying-lush-600nw-2464594961.jpg",
      title: "Equipment Rental",
      subtitle: "Access to top-notch agricultural equipment for efficient farming."
    }
  ]

}

interface Service {
  imageUrl: string;
  title: string;
  subtitle: string;
}
