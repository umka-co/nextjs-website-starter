import { APP_NAME, PUBLIC_URL } from '@/config';
import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of "Terms and Conditions" page
 * @page TermsAndConditions
 */
const TermsAndConditionsPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">Terms and Conditions</Typo>

      <Typo variant="paragraph">
        Welcome to the <strong>DOMAIN-NAME.COM</strong> website (&quot;Site&quot;). This Site is a property of{' '}
        <strong>
          <Link href="https://other-domain.com">COMPANY OR OWNER</Link>
        </strong>{' '}
        (&quot;Owner&quot;). By accessing the Site, you agree to follow and be bound by the following terms and
        conditions concerning your use of the Site and <Link href="/legal/privacy-policy"> our privacy policy</Link>.
      </Typo>
      <Typo variant="paragraph">
        We may revise the Terms and Conditions at any time without notice to you. Areas of the Site may have different
        terms of use posted. If there is a conflict between the Terms and Conditions and terms of use posted for a
        specific area of the Site, the latter shall have precedence with respect to your use of that area of the Site.
      </Typo>

      <Typo variant="header2">Restrictions on Use of Information</Typo>
      <Typo variant="paragraph">
        The Owner hereby authorize you to download, view, copy, and print text and graphics documents
        (&quot;Documents&quot;) from the Site subject to the following:
      </Typo>
      <Typo variant="list" tag="ol">
        <li>The Documents may be used solely for personal, informational, and non-commercial purposes.</li>
        <li>Documents may not be modified or altered in any way.</li>
        <li>
          Any and all copyright or other proprietary notices must appear on all copies that you make, use or distribute.
        </li>
      </Typo>
      <Typo variant="paragraph">
        The Documents specified above do not include logos, images, layout, style, conception, and design of the Site.
        Design elements of the Site are protected by copyright laws and must not be copied, imitated, fabricated or
        reproduced in whole or in part.
      </Typo>

      <Typo variant="header2">Restriction on Use of Software</Typo>
      <Typo variant="paragraph">
        Any use of programs on this site (&quot;Software&quot;) and accompanying documentation you download from the
        Site is subject to a Software license agreement(s) between you and Owner. You must agree to the terms of{' '}
        <Link href="/legal/software-license">the end user license agreement</Link> before using of Software.
      </Typo>

      <Typo variant="header2">Links to External Sites</Typo>
      <Typo variant="paragraph">
        This Site may contain links to other websites on the Internet that are owned and operated by third parties. You
        acknowledge that Owner is not responsible for the operation of or content located on or through any such site.
      </Typo>

      <Typo variant="header2">Trademarks</Typo>
      <Typo variant="paragraph">
        &quot;{APP_NAME}&quot;, &quot;XXX&quot;, &quot;YYY&quot; are trademarks or registered trademarks of Owner. All
        other trademarks appearing on the Site are the sole property of their respective owners.
      </Typo>

      <Typo variant="header2">Disclaimer</Typo>
      <Typo variant="paragraph" uppercase>
        The information, documents and materials, including any Software available on the Site, are provided on an
        &quot;as is&quot; basis without warranties, conditions, representations or guaranties of any kind, expressed or
        implied, including but not limited to the implied warranties of merchantability and suitability for a particular
        purpose. Owner does not warrant that the operation of the Software will be uninterrupted or error free. In no
        event Owner will be liable for any damages whatsoever (including, without limitation, those resulting from lost
        profits, lost data or business interruption) arising out of the use, inability to use, or the results of use of
        Site, Software on this site, or any site linked.
      </Typo>
    </Wrapper>
  );
};

/**
 * MetaData for the page
 */
export const metadata = {
  title: `Terms and Conditions - ${APP_NAME}`,
  alternates: {
    canonical: `${PUBLIC_URL}/legal/terms-conditions//`,
  },
};

export default TermsAndConditionsPage;
