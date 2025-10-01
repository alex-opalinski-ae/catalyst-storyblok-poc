import { StoryblokServerComponent } from '@storyblok/react/rsc'

import styles from './Grid.module.css';

export default function Grid({ blok }) {
	return (
		<div className={styles.grid}>
			{blok.columns?.map((nestedBlok) => (
				<div className={styles.gridItem} key={nestedBlok._uid}>
					<StoryblokServerComponent blok={nestedBlok} />
				</div>
			))}
		</div>
	);
};