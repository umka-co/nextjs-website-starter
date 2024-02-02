import * as amplitude from '@amplitude/analytics-browser';
import { IS_BROWSER } from '@/utils';
import { IS_DEBUG, IS_PRODUCTION } from '@/config';

export const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

let amplitudeInitialized = false;

// Initialize Amplitude only in Browser, when API key is provided, on production environment.
if (IS_BROWSER && AMPLITUDE_API_KEY && IS_PRODUCTION) {
  amplitude.init(
    AMPLITUDE_API_KEY,
    undefined, // userId or email can be passed here
    {
      defaultTracking: true, // Automatically adds "[Amplitude] Page Viewed" events for all pages
      // serverZone: 'EU', // Required! Otherwise, it will send data to US servers.
    }
  );
  amplitudeInitialized = true;
}

// https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-an-event
export const amplitudeEvent = (eventName, eventProperties = {}) => {
  if (!amplitudeInitialized) {
    IS_DEBUG &&
      console.warn('Amplitude was not initialized, but amplitudeEvent() was called:', eventName, eventProperties);
    return;
  }
  amplitude.track(eventName, eventProperties);
};

export default amplitude; // In case we need to use other Amplitude methods.
