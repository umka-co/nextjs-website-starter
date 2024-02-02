import { useMemo } from 'react';
import { redirect } from 'next/navigation';
import { Typo, Wrapper } from '@/components';
import { IS_DEBUG } from '@/config';

const DevToolsPage = () => {
  const filler = useMemo(() => <Typo style={{ opacity: 0.3 }}>{'Some text check margins. '.repeat(12)}</Typo>, []);

  if (!IS_DEBUG) {
    redirect('/');
  }

  return (
    <Wrapper fullWidth>
      <Typo variant="header1">Heading</Typo>

      {filler}
      <Typo variant="header1">{'Typography "header1" sample. '.repeat(6)}</Typo>
      {filler}

      <Typo variant="header2">{'Typography "header2" sample. '.repeat(6)}</Typo>
      {filler}

      <Typo variant="header3">{'Typography "header3" sample. '.repeat(9)}</Typo>
      {filler}

      <Typo variant="header1">Text, paragraph, list</Typo>
      {filler}

      <Typo variant="text">{'Typography "text" sample. '.repeat(18)}</Typo>
      {filler}

      <Typo variant="paragraph">{'First "paragraph" sample. '.repeat(12)}</Typo>
      <Typo variant="paragraph">{'Second "paragraph" sample. '.repeat(12)}</Typo>
      <Typo variant="paragraph">
        Paragraph with several paragraphs and lists inside it.
        <p>{'Sub paragraph #1. '.repeat(12)}</p>
        <p>{'Sub paragraph #2. '.repeat(12)}</p>
        <p>{'Sub paragraph #3. '.repeat(12)}</p>
        <ul>
          <li>{'List 1 - Item 1. '.repeat(12)}</li>
          <li>{'List 1 - Item 2. '.repeat(12)}</li>
          <li>{'List 1 - Item 3. '.repeat(12)}</li>
        </ul>
        <ul>
          <li>{'List 2 - Item 1. '.repeat(12)}</li>
          <li>{'List 2 - Item 2. '.repeat(12)}</li>
          <li>{'List 2 - Item 3. '.repeat(12)}</li>
        </ul>
        <p>{'Sub paragraph #4. '.repeat(12)}</p>
      </Typo>
      {filler}
    </Wrapper>
  );
};

export default DevToolsPage;
