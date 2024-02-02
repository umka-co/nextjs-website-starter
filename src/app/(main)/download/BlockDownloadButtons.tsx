'use client';
import { useOnMobile } from '@/hooks';
import { Stack } from '@/components';
import DownloadButton from '@/components/DownloadButton';

/**
 * Renders 2 "Download" buttons in column on mobile and in row on desktop
 * @component BlockDownloadButtons
 */
const BlockDownloadButtons = () => {
  const onMobile = useOnMobile();
  const direction = onMobile ? 'column' : 'row';
  return (
    <Stack direction={direction} padding="1rem" gap="1rem">
      <DownloadButton file="exe">Download EXE</DownloadButton>
      <DownloadButton file="zip" variant="outlined">
        Download ZIP
      </DownloadButton>
    </Stack>
  );
};

export default BlockDownloadButtons;
