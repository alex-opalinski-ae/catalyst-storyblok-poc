import { StoryblokServerComponent } from '@storyblok/react/rsc'

export default function Container({ blok }) {
	return (
		<div 
			className='h-full'
			style={{
				backgroundColor: `${blok.backgroundColor.color}`,
			}}
		>
			<div className='mx-auto px-4 py-10 @xl:px-6 @xl:py-14 @4xl:px-8 @4xl:py-20 max-w-[var(--section-max-width-2xl,1536px)]'>
				{blok.rows?.map((nestedBlok) => (
					<div key={nestedBlok._uid}>
						<StoryblokServerComponent blok={nestedBlok} />
					</div>
				))}
			</div>
		</div>
	);
};