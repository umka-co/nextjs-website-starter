import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';

const PRIVACY_POLICY_DATE = '2024-01-05'; // TODO: put your date here or use today's date

/**
 * Content of "Privacy Policy" page
 * @page PrivacyPolicy
 */
const PrivacyPolicyPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Privacy Policy</Typo>

      <Typo variant="header2">What information do we collect?</Typo>
      <Typo variant="paragraph">
        We collect information from you when you register on our site, place an order, subscribe to our newsletter or
        fill out a form.
      </Typo>
      <Typo variant="paragraph">
        When ordering or registering on our site, as appropriate, you may be asked to enter your: name or e-mail
        address. You may, however, visit our site anonymously. Google, as a third party vendor, uses cookies to serve
        ads on your site.
      </Typo>
      <Typo variant="paragraph">
        Google&apos;s use of the DART cookie enables it to serve ads to your users based on their visit to your sites
        and other sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and
        content network privacy policy.
      </Typo>

      <Typo variant="header2">What do we use your information for?</Typo>
      <Typo variant="paragraph">
        Any of the information we collect from you may be used in one of the following ways: Any of the information we
        collect from you may be used in one of the following ways:
      </Typo>
      <Typo variant="list">
        <li>To personalize your experience. Your information helps us to better respond to your individual needs.</li>
        <li>
          To improve our website. We continually strive to improve our website offerings based on the information and
          feedback we receive from you.
        </li>
        <li>
          To improve customer service. Your information helps us to more effectively respond to your customer service
          requests and support needs.
        </li>
        <li>
          To process transactions. Your information, whether public or private, will not be sold, exchanged,
          transferred, or given to any other company for any reason whatsoever, without your consent, other than for the
          express purpose of delivering the purchased product or service requested.
        </li>
        <li>
          To send periodic emails. The email address you provide for order processing, will only be used to send you
          information and updates pertaining to your order.
        </li>
      </Typo>

      <Typo variant="header2">How do we protect your information?</Typo>
      <Typo variant="paragraph">
        We implement a variety of security measures to maintain the safety of your personal information when you place
        an order or enter, submit, or access your personal information.
      </Typo>
      <Typo variant="paragraph">
        We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket
        Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by
        those authorized with special access rights to such systems, and are required to?keep the information
        confidential.
      </Typo>
      <Typo variant="paragraph">
        After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not
        be stored on our servers.
      </Typo>

      <Typo variant="header2">Do we use cookies?</Typo>
      <Typo variant="paragraph">
        Yes. Cookies are small files that a site or its service provider transfers to your computers hard drive through
        your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser
        and capture and remember certain information.
      </Typo>
      <Typo variant="paragraph">
        We use cookies to help us remember and process the items in your shopping cart, understand and save your
        preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and
        site interaction so that we can offer better site experiences and tools in the future. We may contract with
        third-party service providers to assist us in better understanding our site visitors. These service providers
        are not permitted to use the information collected on our behalf except to help us conduct and improve our
        business.
      </Typo>
      <Typo variant="paragraph">
        If you prefer, you can choose to have your computer warn you each time a cookie is being sent, or you can choose
        to turn off all cookies via your browser settings. Like most websites, if you turn your cookies off, some of our
        services may not function properly. However, you can still place orders by contacting customer service.
      </Typo>

      <Typo variant="header2">Do we disclose any information to outside parties?</Typo>
      <Typo variant="paragraph">
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This
        does not include trusted third parties who assist us in operating our website, conducting our business, or
        servicing you, so long as those parties agree to keep this information confidential. We may also release your
        information when we believe release is appropriate to comply with the law, enforce our site policies, or protect
        ours or others rights, property, or safety. However, non-personally identifiable visitor information may be
        provided to other parties for marketing, advertising, or other uses.
      </Typo>

      <Typo variant="header2">Third party links</Typo>
      <Typo variant="paragraph">
        Occasionally, at our discretion, we may include or offer third party products or services on our website. These
        third party sites have separate and independent privacy policies. We therefore have no responsibility or
        liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of
        our site and welcome any feedback about these sites.
      </Typo>

      <Typo variant="header2">California Online Privacy Protection Act Compliance</Typo>
      <Typo variant="paragraph">
        Because we value your privacy we have taken the necessary precautions to be in compliance with the California
        Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties
        without your consent.
      </Typo>

      <Typo variant="header2">Childrens Online Privacy Protection Act Compliance</Typo>
      <Typo variant="paragraph">
        We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect
        any information from anyone under 13 years of age. Our website, products and services are all directed to people
        who are at least 13 years old or older.
      </Typo>

      <Typo variant="header2">Online Privacy Policy Only</Typo>
      <Typo variant="paragraph">
        This online privacy policy applies only to information collected through our website and not to information
        collected offline.
      </Typo>

      <Typo variant="header2">Terms and Conditions</Typo>
      <Typo variant="paragraph">
        Please also visit our <Link href="/legal/terms-conditions/">Terms and Conditions</Link> section establishing the
        use, disclaimers, and limitations of liability governing the use of our website at{' '}
        <Link href="/legal/terms-conditions/">{PUBLIC_URL}/legal/terms-conditions</Link>
      </Typo>

      <Typo variant="header2">Your Consent</Typo>
      <Typo variant="paragraph">
        By using our site, you consent to our <Link href="/legal/privacy-policy/">websites privacy policy</Link>.
      </Typo>

      <Typo variant="header2">Changes to our Privacy Policy</Typo>
      <Typo variant="paragraph">
        If we decide to change our privacy policy, we will post those changes on this page{' '}
        <Link href="/legal/privacy-policy/">{PUBLIC_URL}/legal/privacy-policy</Link>. This policy was last modified on{' '}
        {PRIVACY_POLICY_DATE}
      </Typo>

      <Typo variant="header2">Contacting Us</Typo>
      <Typo variant="paragraph">
        If there are any questions regarding this privacy policy you may contact us using the information below:
      </Typo>
      <Typo variant="list">
        <li>
          Using online <Link href="/contact/">contact form</Link>
        </li>
        <li>Via email support(at)domain-name[dot]com</li>
        <li>Post mail to 1428 Elm Street, Springwood, Ohio, USA </li>
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/legal/privacy-policy/`,
  },
};

export default PrivacyPolicyPage;
