import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { setRequestLocale } from 'next-intl/server';
import { cache } from 'react';

import { SidebarMenu } from '@/vibes/soul/sections/sidebar-menu';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';

import { getStoryblokApi } from '~/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

interface Props extends React.PropsWithChildren {
  params: Promise<{ locale: string; id: string }>;
}

export default async function WebPageLayout({ params, children }: Props) {
  const { locale, id, slug } = await params;

  setRequestLocale(locale);
  const storyblokApi = getStoryblokApi();

  console.log('id, slug, ',id, slug);
  

  let links = await storyblokApi.get(`cdn/links`, {
    version: 'draft',
    starts_with: `${slug}`,
  }); 
  let storkblokData;
  
  console.log('links',links);
  

  if (links.total) {
    storkblokData = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: 'draft',
    });
    storkblokData = storkblokData.data;
  } else {
    storkblokData = undefined;
  }

  console.log('THIS IS A STORYBLOK PAGE',storkblokData);
  

  return (
    <>
      {
        storkblokData ?
        <>
          <StoryblokStory story={storkblokData.story} location='header' />
        </>        
        : ''
      }
    </>
  );
}