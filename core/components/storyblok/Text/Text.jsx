import { storyblokEditable } from "@storyblok/react/rsc";

export default function Text({ blok }) {
	const Tag = blok.block;
	
	return (
		<Tag
			style={{
				color: blok.textColor.color,
				fontFamily: blok.fontFamily,
				fontSize: `${blok.fontSize}px`,
				lineHeight: blok.lineHeight,
			}}
		>
			<span {...storyblokEditable(blok)}>{blok.content}</span>
		</Tag>
	);
}