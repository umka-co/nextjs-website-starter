import { Typo } from '@/components';
import SocialMedia from '@/components/SocialMedia';

const BlockSocialMedia = () => {
  return (
    <>
      <Typo variant="header2">Social media</Typo>
      <Typo variant="paragraph">
        Connect with our team through various social media channels. Choose the one that suits you best:
      </Typo>
      <SocialMedia variant="full" />
      <Typo variant="paragraph">
        Feel free to send us a message or follow our updates on your preferred platform. We value your engagement and
        look forward to connecting with you!
      </Typo>
    </>
  );
};

export default BlockSocialMedia;
