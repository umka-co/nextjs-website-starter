import { APP_NAME } from '@/config';
import { Typo } from '@/components';
import ContactForm from '@/components/ContactForm';

const BlockContactForm = () => {
  return (
    <>
      <Typo variant="header2">Contact form</Typo>
      <Typo variant="paragraph">
        If you have any inquiries or feedback concerning the <strong>{APP_NAME}</strong> software, please don&apos;t
        hesitate to reach out to us. Simply complete the form below, and we&apos;ll get back to you promptly.
      </Typo>
      <ContactForm />
    </>
  );
};

export default BlockContactForm;
