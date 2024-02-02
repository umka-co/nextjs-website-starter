import { FunctionComponent } from 'react';
import { IconProps } from '../Icon';

/**
 * Renders the icon that was not found
 * Based on ./missing-image.svg
 */
const IconNotFound: FunctionComponent<IconProps> = (props) => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1" {...props}>
      <defs>
        <linearGradient x1="50" y1="40" x2="50" y2="100" id="Gradient1" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: '#ccc', stopOpacity: 1 }} offset="0" />
          <stop style={{ stopColor: '#000000', stopOpacity: 1 }} offset="0.7" />
        </linearGradient>
        <linearGradient x1="50" y1="0" x2="50" y2="60" id="Gradient2" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: '#301D00', stopOpacity: 1 }} offset="0.2" />
          <stop style={{ stopColor: '#FFAB00', stopOpacity: 1 }} offset="1" />
        </linearGradient>
      </defs>

      <path style={{ fill: '#eee', stroke: '#999', strokeWidth: 1 }} d="M 2,23 77,6 94,75 18,94 z" />
      <path style={{ fill: 'url(#Gradient1)', stroke: '#444', strokeWidth: 1 }} d="M 8,27 73,12 88,71 22,88 z" />

      <path style={{ fill: '#eee', stroke: '#999', strokeWidth: 1 }} d="m 19,12 77,0 0,74 -77,0 z" />
      <path style={{ fill: 'url(#Gradient2)', stroke: '#444' }} d="m 25,18 65,0 0,62 -65,0 z" />
      <path
        style={{ fill: 'url(#Gradient1)', stroke: '#666' }}
        d="m 25,48 0,32 65,0 0,-45 C 90,35 84,51 77,54 68,58 64,52 61,46 57,54 56,58 50,60 44,62 38,45 36,38 32,43 29,47 25,48 z"
      />
      <path
        style={{ fill: '#FF3D3D', fillOpacity: '0.6', stroke: '#730000', strokeWidth: 2 }}
        d="M 53,44 44,53 61,71 44,88 53,97 71,80 88,97 96,88 80,71 97,52 89,44 71,61 z"
      />
    </svg>
  );
};

export default IconNotFound;
