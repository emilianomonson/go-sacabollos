import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrl: './instagram.component.scss'
})
export class InstagramComponent {
  instagramUrl = 'https://www.instagram.com/sacabollos.go';
  isMuted = true;

  toggleSound(event: Event): void {
    event.preventDefault();
    this.isMuted = !this.isMuted;
  }

  reproducirVideo(video: HTMLVideoElement): void {
    video.play().catch(() => {}); 
  }

  pausarVideo(video: HTMLVideoElement): void {
    video.pause();
  }
}