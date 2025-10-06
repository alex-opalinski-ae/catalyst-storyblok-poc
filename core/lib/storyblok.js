import Page from "~/components/storyblok/Page/Page";
import Grid from "~/components/storyblok/Grid/Grid";
import Image from "~/components/storyblok/Image/Image";
import Product from "~/components/storyblok/Product/Product";
import Text from "~/components/storyblok/Text/Text";
import Container from "~/components/storyblok/Container/Container"
import HeroCarousel from "~/components/storyblok/HeroCarousel/HeroCarousel"
import HeroCarouselSlide from "~/components/storyblok/HeroCarousel/HeroCarouselSlide"

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
		page: Page,
        container: Container,
        grid: Grid,
        image: Image,
        product: Product,
        text: Text,
        heroCarousel: HeroCarousel,
        heroCarouselSlide: HeroCarouselSlide,
	},
    apiOptions: {
        region: 'eu',
    },
});