import { withInstall } from './../../utils';
import _Carousel from './carousel.vue';
import _CarouselItem from './carousel-item.vue';

export const Carousel = withInstall(_Carousel, {
  CarouselItem: _CarouselItem
});

export default Carousel;
