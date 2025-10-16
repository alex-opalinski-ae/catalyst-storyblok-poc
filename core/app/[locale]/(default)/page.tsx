import { locales } from '~/i18n/locales';
import { Page as MakeswiftPage } from '~/lib/makeswift';

import { getStoryblokApi } from '~/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

interface Params {
  locale: string;
}

export function generateStaticParams(): Params[] {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<Params>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
	const { data } = await fetchData();

  return (
    <div className="pageTest">
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
	const storyblokApi = getStoryblokApi();
	return await storyblokApi.get(`cdn/stories/pages/home`, { version: 'draft' });
}
