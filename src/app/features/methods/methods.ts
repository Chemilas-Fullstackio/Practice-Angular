import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-methods',
  imports: [],
  templateUrl: './methods.html',
  styleUrl: './methods.scss',
})
export class Methods {
  title = 'Our agricultural methods';

  subtitle: string = "We blend tradition with innovation to create sustainable, high-yield farming practices that work for today's world";

  activeStep = signal<number>(1);

  processSteps = [
    {
      "id": 1,
      "title": "Assessment and Planning",
      "content": "At the heart of every successful farm lies a well-crafted plan. Our assessment and planning services are designed to evaluate your land, available resources, and long-term goals. We take a holistic approach to ensure every decision is data-driven and aligned with sustainable farming practices.",
      "description": "We begin by analyzing soil health, climate conditions, water availability, and crop suitability to create a customized farming strategy tailored to your needs."
    },
    {
      "id": 2,
      "title": "Implementation of Advanced Practices",
      "content": "We bring innovation directly to your fields by implementing modern agricultural techniques and technologies. From precision farming tools to sustainable irrigation systems, we ensure your farm operates efficiently and responsibly.",
      "description": "Our experts guide you through the adoption of advanced practices, ensuring a smooth transition while maximizing productivity and minimizing risks."
    },
    {
      "id": 3,
      "title": "Monitoring and Optimization",
      "content": "Farming success requires continuous monitoring and timely adjustments. We leverage real-time data and smart technologies to track performance, identify issues early, and optimize operations for better yield and efficiency.",
      "description": "Using IoT sensors, satellite data, and drone imagery, we provide actionable insights to improve crop health and resource utilization."
    },
    {
      "id": 4,
      "title": "Ongoing Support and Improvement",
      "content": "Agriculture is an evolving journey, and we stay with you at every stage. Our ongoing support ensures that your farm continues to adapt, grow, and improve with changing conditions and market demands.",
      "description": "Through regular consultations, performance reviews, and strategy updates, we help you stay ahead with continuous improvement and innovation."
    }
  ]

  toggleStep(id: number){
    this.activeStep.set(id);
  }


}
