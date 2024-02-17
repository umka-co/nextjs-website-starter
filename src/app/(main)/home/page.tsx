import { APP_NAME, PUBLIC_URL } from '@/config';
import { Button, Icon, SocialMedia, Stack, Typo, Wrapper } from '@/components';
import { ICONS, IconName } from '@/components/Icon';
import DownloadButton from '@/components/DownloadButton';
import Video from '@/components/Video';
import Picture from '@/components/Picture';

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">{APP_NAME}</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> {'Paragraph of text. '.repeat(10)}
      </Typo>
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
      <Typo variant="paragraph">{'Paragraph of text again. '.repeat(10)}</Typo>

      <Typo variant="header1">Button</Typo>
      <Stack alignItems="center">
        <Stack direction="row">
          <Button variant="contained">Variant Contained</Button>
          <Button disabled variant="contained">
            Contained Disabled
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="outlined">Variant Outlined</Button>
          <Button disabled variant="outlined">
            Outlined Disabled
          </Button>
        </Stack>
        <Stack direction="row">
          <Button variant="text">Variant Text</Button>
          <Button disabled variant="text">
            Text Disabled
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typo>Variant Icon:</Typo>
          <Button variant="icon" icon="menu" />
          <Button variant="icon" icon="close" />
          {/* <Button variant="icon" icon="SOME_INVALID_NAME" /> */}
          <Button disabled variant="icon" icon="close" />
        </Stack>

        <DownloadButton>Download Button</DownloadButton>
      </Stack>

      <Typo variant="header1">Icon</Typo>
      <Stack direction="row" alignItems="center">
        {Object.keys(ICONS).map((icon) => (
          <Icon key={icon} icon={icon as IconName} size="2rem" />
        ))}
      </Stack>

      <Typo variant="header2">Picture</Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Picture variant="first" width={600} height={315} />
        <Picture src="/img/favicon/256x256.png" width={256} height={256} />
        <Picture variant="second" />
      </Stack>

      <Typo variant="paragraph">{'Another paragraph of text. '.repeat(10)}</Typo>

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
  title: `TODO: Something cool here - ${APP_NAME}`,
  alternates: {
    canonical: PUBLIC_URL,
  },
};

export default HomePage;
