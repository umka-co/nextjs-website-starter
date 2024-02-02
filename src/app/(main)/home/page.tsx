import { APP_NAME, PUBLIC_URL } from '@/config';
import { Button, Icon, SocialMedia, Stack, Typo, Wrapper } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import Video from '@/components/Video';
import Picture from '@/components/Picture';
import { ICONS } from '../../../components/Icon/icons';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  const appName = <strong>{APP_NAME}</strong>;

  return (
    <Wrapper tag="article">
      <Typo variant="header1">Header 1 Style</Typo>
      <Typo variant="paragraph">{'Paragraph of text'.repeat(10)}</Typo>
      <Typo variant="header3">Header 2 Style</Typo>
      <Typo variant="list">
        <li>
          List style - <strong>Item 1</strong>
        </li>
        <li>
          List style - <strong>Item 2</strong>
        </li>
        <li>
          List style - <strong>Item 3</strong>
        </li>
      </Typo>
      <Typo variant="header3">Header 3 Style</Typo>
      <Typo variant="paragraph">{'Paragraph of text again'.repeat(10)}</Typo>

      <Typo variant="header1">Button</Typo>
      <Stack alignItems="center">
        <Button variant="contained">Variant Contained</Button>
        <Button variant="outlined">Variant Outlined</Button>
        <Button variant="text">Variant Text</Button>
        <Stack direction="row" alignItems="center">
          <Typo>Variant Icon:</Typo>
          <Button variant="icon" icon="menu" />
          <Button variant="icon" icon="close" />
          <Button variant="icon" icon="SOME_INVALID_NAME" />
        </Stack>
        <DownloadButton>Download Button</DownloadButton>
      </Stack>

      <Typo variant="header1">Icon</Typo>
      <Stack direction="row" alignItems="center">
        {Object.keys(ICONS).map((icon) => (
          <Icon key={icon} icon={icon} size="2rem" />
        ))}
      </Stack>

      <Typo variant="header2">Picture</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Picture src="/img/favicon/256x256.png" width={256} height={256} />
      </Stack>

      <Typo variant="paragraph">{'Another paragraph of text'.repeat(10)}</Typo>

      <Typo variant="header1">Video</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Video video="demo" />
      </Stack>

      <Typo variant="header1">Social Media</Typo>
      <SocialMedia variant="full" />
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Free Caps Lock, Num Lock, Scroll Lock Software Indicator - ${APP_NAME}`,
  alternates: {
    canonical: PUBLIC_URL,
  },
};

export default HomePage;
