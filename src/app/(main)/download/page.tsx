import { APP_NAME, PUBLIC_URL } from '@/config';
import { Typo, Wrapper } from '@/components';
import BlockDownloadButtons from './BlockDownloadButtons';

/**
 * Content of Download page
 * @page Download
 */
const PageDownload = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Download</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> is a small and simple utility... {'Some text here. '.repeat(10)}
      </Typo>
      <BlockDownloadButtons />
      <Typo variant="paragraph">{'Some text here. '.repeat(100)}</Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Download - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/download/`,
  },
};

export default PageDownload;
