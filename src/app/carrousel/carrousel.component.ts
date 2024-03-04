import { Component, Input, OnInit } from '@angular/core';
import { T_CarrouselImage } from '../types/Carrousel';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit {
  @Input() images: T_CarrouselImage[] = [];
  @Input() carrouselInterval: number = 5000;
  selectedIndex: number = 0;

  ngOnInit(): void {
    //this.autoSlider()
  }

  autoSlider() {
    const obs$ = interval(this.carrouselInterval);
    obs$.subscribe(() => {
      this.onNextImage();
    });
  }

  onPrevImage() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextImage() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
