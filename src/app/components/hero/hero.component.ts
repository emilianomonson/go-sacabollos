import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para el ngClass

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  isMuted = true;

  toggleSound(event: Event): void {
    event.preventDefault();
    this.isMuted = !this.isMuted;
  }
}