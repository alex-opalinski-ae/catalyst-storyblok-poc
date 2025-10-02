export default function Image({ blok }) {
	console.log('Image({ blok })',blok);
	
	return (
		<>
			<img src={blok.media.filename} alt={blok.media.alt}/>
		</>
	);
}