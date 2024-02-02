import { APP_NAME, PUBLIC_URL } from '@/config';
import { Wrapper } from '@/components';
import BlockSocialMedia from './BlockSocialMedia';
import BlockContactForm from './BlockContactForm';

/**
 * Content of the "Contact" page
 * @page Contact
 */
const ContactPage = () => {
  return (
    <Wrapper tag="article">
      <BlockContactForm />
      <BlockSocialMedia />
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Contact - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/contact/`,
  },
};

export default ContactPage;
