import Page from "~/components/storyblok/Page";
import Feature from "~/components/storyblok/Feature";
import Grid from "~/components/storyblok/Grid";
import Teaser from "~/components/storyblok/Teaser";
import Image from "~/components/storyblok/Image";
import Product from "~/components/storyblok/Product";

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
    use: [apiPlugin],
    components: {
		page: Page,
		feature: Feature,
		grid: Grid,
		teaser: Teaser,
        image: Image,
        product: Product,
	},
    apiOptions: {
        region: 'eu',
    },
});