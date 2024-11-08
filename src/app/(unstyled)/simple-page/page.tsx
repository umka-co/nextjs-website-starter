import Link from 'next/link';

/**
 * Content of "Unstyled" page
 * @page Unstyled
 */
const SimplePage = () => {
  return (
    <div>
      <h1>Simple Page</h1>
      <p>This is a simple of &quot;Unstyled&quot; page.</p>
      <p>OK, with minimum styling :)</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
};

export default SimplePage;
