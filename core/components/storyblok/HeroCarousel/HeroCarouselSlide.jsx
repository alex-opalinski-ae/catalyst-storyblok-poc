import { StoryblokServerComponent } from '@storyblok/react/rsc'
import styles from './HeroCarouselSlide.module.css'; 

export default function HeroCarouselSlide({ blok }) {
    console.log('HeroCarouselSlide({ blok }),',blok);

    return (
        <div className={styles.slide}>
            <div className={styles.background}>
                {blok.backgroundImage ? 
                    <img src={blok.backgroundImage.filename} alt={blok.backgroundImage.alt}
                        className={styles.backgroundImage}
                    />
                 : ''}
            </div>
            <div className='mx-auto px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20 max-w-[var(--section-max-width-2xl,1536px)]'>
                <div className={styles.content}>
                    {blok.content?.map((nestedBlok) => (
                        <div key={nestedBlok._uid}>
                            <StoryblokServerComponent blok={nestedBlok} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};