import { FunctionComponent } from 'react';
import { APP_NAME } from '@/config';
import { ObjectPropByName } from '@/utils';
import { IconName } from '../Icon';
import Button from '../Button';
import Stack, { StackProps } from '../Stack/Stack';

// TODO: put all known social media links here
export const SOCIAL_MEDIA: ObjectPropByName = {
  facebook: {
    href: 'https://www.facebook.com/TODO_xxx',
    title: `Follow ${APP_NAME} on Facebook`,
  },
  twitter: {
    href: 'https://twitter.com/TODO_xxx',
    title: `Follow ${APP_NAME} on Twitter`,
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/TODO_xxx/',
    title: `Follow ${APP_NAME} on LinkedIn`,
  },
  instagram: {
    href: 'https://www.instagram.com/TODO_xxx/',
    title: `Follow ${APP_NAME} on Instagram`,
  },
  youtube: {
    href: 'https://www.youtube.com/user/TODO_xxx',
    title: `Follow ${APP_NAME} on YouTube`,
  },
};

interface Props extends StackProps {
  variant?: 'full' | 'footer'; // TODO: add more variants if needed
}

/**
 * Renders list of social media links as icons
 * @component SocialMedia
 */
const SocialMedia: FunctionComponent<Props> = ({ variant = 'full', ...restOfProps }) => {
  const iconsToRender = variant === 'footer' ? ['facebook', 'twitter', 'linkedin'] : Object.keys(SOCIAL_MEDIA);
  return (
    <Stack direction="row" justifyContent="center" {...restOfProps}>
      {iconsToRender.map((key) => (
        <Button
          key={key}
          icon={key as IconName}
          href={SOCIAL_MEDIA[key].href}
          title={SOCIAL_MEDIA[key].title}
          variant="icon"
        />
      ))}
    </Stack>
  );
};

export default SocialMedia;
