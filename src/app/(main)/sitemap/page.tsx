import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
// import { articleToTitle, articleToUrl, getArticleList } from '../article/utils';

interface LinkData {
  url: string;
  title: string;
}

/**
 * Content of the "Sitemap" page. This is page is not `sitemap.xml`, but a page for humans.
 * @page Sitemap
 */
const SitemapPage = async () => {
  // const articles: LinkData[] = (await getArticleList()).map((current) => {
  //   return { url: articleToUrl(current), title: articleToTitle(current) };
  // });

  return (
    <Wrapper tag="article">
      <Typo variant="header1">Sitemap</Typo>
      <Typo variant="list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/legal/">Legal</Link>
          <Typo variant="list">
            <li>
              <Link href="/legal/terms-conditions/">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/legal/privacy-policy/">Privacy Policy</Link>
            </li>
          </Typo>
        </li>
        <li>
          <Link href="/sitemap/">Sitemap</Link>
        </li>
        <li>
          <Link href="/contact/">Contact</Link>
        </li>
        <li>
          <Link href="/download/">Download</Link>
        </li>

        {/* <li>
          <Link href="/articles/">Articles</Link>
          <Typo variant="list">
            {articles.map(({ title, url }) => {
              return (
                <li key={url}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
          </Typo>
        </li> */}

        {/* Unstyled pages: */}
        <li>
          <Link href="/simple-page/">Unstyled Page Example</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Sitemap - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/sitemap/`,
  },
};

export default SitemapPage;
