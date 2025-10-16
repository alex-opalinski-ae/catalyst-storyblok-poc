import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default function Grid({ blok }) {
	let className = `
		grid grid-cols-${blok.columnCount} gap-x-${blok.horizontalGap} gap-y-${blok.verticalGap}
	`

	return (
		<div className={className}>
			{blok.columns?.map((nestedBlok) => (
				<div key={nestedBlok._uid}>
					<StoryblokServerComponent blok={nestedBlok} />
				</div>
			))}
		</div>
	);
};