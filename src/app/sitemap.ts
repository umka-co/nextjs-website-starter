import { MetadataRoute } from 'next';
import { PUBLIC_URL } from '@/config';
// import { articleToUrl, getArticleList } from './(main)/article/utils';

async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();
  const lastModified = currentDate.substring(0, currentDate.indexOf('T'));

  // const articleList = await getArticleList();
  // const articles: MetadataRoute.Sitemap = articleList.map((name) => ({
  //   url: `${PUBLIC_URL}${articleToUrl(name)}`,
  //   lastModified,
  //   changeFrequency: 'monthly',
  //   priority: 0.5,
  // }));

  return [
    {
      url: PUBLIC_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${PUBLIC_URL}/legal/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${PUBLIC_URL}/legal/privacy-policy/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/legal/terms-conditions/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${PUBLIC_URL}/legal/software-license/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${PUBLIC_URL}/download/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${PUBLIC_URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.9,
    },

    // {
    //   url: `${PUBLIC_URL}/article/`,
    //   lastModified,
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
    // ...articles,

    {
      url: `${PUBLIC_URL}/sitemap/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}

export default sitemap;
