import emailjs from '@emailjs/browser';

let emailjsInitialized = false;

if (process.env.NEXT_PUBLIC_EMAILJS_KEY) {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY);
  emailjsInitialized = true;
}

// Helper to check if EmailJs was initialized.
export const isEmailJsInitialized = () => emailjsInitialized;

export default emailjs;
