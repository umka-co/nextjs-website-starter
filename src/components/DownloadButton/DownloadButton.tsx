'use client';
import { FunctionComponent } from 'react';
import { gaPageView } from '@/lib/ga';
import { APP_NAME } from '@/config';
import Button, { ButtonProps } from '../Button/Button';

const LOCAL_FILES = {
  exe: '/files/_TODO_PRODUCT_INSTALLER_.exe',
  zip: '/files/_TODO_PRODUCT_INSTALLER_.zip',
};

const S3_BUCKET_FILES = {
  exe: 'https://_TODO_S3_BUCKET_NAME_.s3.us-east-2.amazonaws.com/software/_TODO_PRODUCT_INSTALLER_.exe',
  zip: 'https://_TODO_S3_BUCKET_NAME_.s3.us-east-2.amazonaws.com/software/_TODO_PRODUCT_INSTALLER_.zip',
};

interface Props extends ButtonProps {
  file?: keyof typeof LOCAL_FILES;
}

/**
 * Renders "Download" button
 * Downloads file from S3 bucket and tracks the "page view" event for local file name
 * @component DownloadButton
 * @param {string} [file=exe] - file type to download
 */
const DownloadButton: FunctionComponent<Props> = ({ children, file = 'exe', ...restOfProps }) => {
  const hrefToTrack = LOCAL_FILES[file];
  const hrefToDownload = S3_BUCKET_FILES[file];
  return (
    <Button
      href={hrefToDownload}
      title={`Download ${APP_NAME} software installation package as ${file.toUpperCase()} file`}
      onClick={
        () => gaPageView(hrefToTrack) // Notify Google Analytics about file download
        // Note: Amplitude event is fired automatically
      }
      {...restOfProps}
    >
      {children || 'Download'}
    </Button>
  );
};

export default DownloadButton;
