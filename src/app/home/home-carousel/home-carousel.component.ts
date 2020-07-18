import { Component, ViewChild } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
  NgbCarouselConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
})
export class HomeCarouselComponent {
  // images = [62, 83, 455, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = [
    'assets/images/HairCutPics/haircut1.jpeg',
    'assets/images/HairCutPics/haircut2.jpeg',
    'assets/images/HairCutPics/haircut3.jpeg',
    'assets/images/HairCutPics/haircut4.jpeg',
    'assets/images/HairCutPics/haircut5.jpeg',
    'assets/images/HairCutPics/haircut6.jpeg',
    'assets/images/HairCutPics/haircut7.jpeg',
    'assets/images/HairCutPics/haircut8.jpeg',
    'assets/images/HairCutPics/haircut9.jpeg',
    'assets/images/HairCutPics/haircut10.jpeg',
  ];

  // 'assets/images/softcodeandcontrolroundlogo.png';

  showNavigationArrows = false;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  // paused = false;
  // unpauseOnArrow = false;
  // pauseOnIndicator = false;
  // pauseOnHover = true;

  // @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  // togglePaused() {
  //   if (this.paused) {
  //     this.carousel.cycle();
  //   } else {
  //     this.carousel.pause();
  //   }
  //   this.paused = !this.paused;
  // }

  // onSlide(slideEvent: NgbSlideEvent) {
  //   if (this.unpauseOnArrow && slideEvent.paused &&
  //     (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
  //     this.togglePaused();
  //   }
  //   if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
  //     this.togglePaused();
  //   }
  // }
}
