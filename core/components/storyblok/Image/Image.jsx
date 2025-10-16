export default function Image({ blok }) {
	return (
		<>
			<img src={blok.media.filename} alt={blok.media.alt}/>
		</>
	);
}