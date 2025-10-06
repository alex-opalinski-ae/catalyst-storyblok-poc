import { StoryblokServerComponent } from '@storyblok/react/rsc'
import {
  Carousel,
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
} from '@/vibes/soul/primitives/carousel/index';

import styles from './HeroCarousel.module.css'; // fix typo

export default function HeroCarousel({ 
    blok,
    showScrollbar = true,
    showArrows = true,
    colorScheme,
}) {
    console.log('HeroCarousel({ blok }),',blok);

    return (
        <Carousel>
            <CarouselContent className="HeroCarousel-track mb-10">
                {blok.slides?.map((nestedBlok, index) => (
                    <CarouselItem
                        className="HeroCarousel-slide basis-full"
                        key={index}
                    >
                        <StoryblokServerComponent blok={nestedBlok} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {(showScrollbar || showArrows) && (
                <div className="HeroCarousel-controls mt-10 flex w-full items-center justify-between">
                {showScrollbar && <CarouselScrollbar colorScheme={colorScheme} />}
                {showArrows && <CarouselButtons colorScheme={colorScheme} />}
                </div>
            )}
        </Carousel>
    );
};