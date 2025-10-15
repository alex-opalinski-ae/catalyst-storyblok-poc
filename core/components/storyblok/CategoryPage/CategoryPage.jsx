import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function CategoryPage({ blok, location }) {
	console.log('blok:', blok);
	
	if (location === 'header') {
		return (
			<>
				{blok.header?.map((nestedBlok) => (
					<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
				))}
			</>
		)
	} else {
		return (
			<>
				{blok.footer?.map((nestedBlok) => (
					<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
				))}
			</>
		);
	}
}