import { IS_DEBUG } from '@/config';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gaPageView = (url) => {
  if (typeof window.gtag !== 'function') {
    IS_DEBUG && console.warn('GA was not installed, but gaPageView() was called, url:', url);
    return;
  }

  window.gtag('event', 'page_view', {
    page_location: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gaEvent = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'function') {
    IS_DEBUG && console.warn('GA was not installed, but gaEvent() was called:', action, category, label, value);
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
