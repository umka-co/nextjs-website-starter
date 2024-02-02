'use client';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components';
import styles from './ContactForm.module.css';

// We need to call it once to initialize emailjs
// emailjs.init(envRequired(process.env.NEXT_PUBLIC_EMAILJS_KEY));
process.env.NEXT_PUBLIC_EMAILJS_KEY && emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_KEY);

/**
 * Verifies if the email address is valid
 * @param {string} email - email address to validate
 * @returns {boolean} - true if email is valid, false otherwise
 */
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * Renders a "Contact Form" with email and message fields
 * Uses `emailjs` npm to send emails.
 * @component ContactForm
 */
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    setEmailSent(false);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!validateEmail(email)) {
      setError('Invalid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.send('default_service', 'template_xxx', {
        email,
        message,
      });
      setEmailSent(true);
    } catch (error) {
      console.error(error);
      const errorMessage: string = (error as Error).message || (error as any).text;
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const iconButton = isSubmitting ? 'spinner' : undefined;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="contact-form-email">
        Your Email: <span>(required)</span>
      </label>
      <input autoComplete="on" id="contact-form-email" name="email" type="email" required />
      <label htmlFor="contact-form-message">Message:</label>
      <textarea id="contact-form-message" name="message" rows={5} />
      <div className={styles.actions}>
        {emailSent && <div className={styles.success}>Your message sent successfully</div>}
        {error && <div className={styles.error}>Error: {error}</div>}
        <Button disabled={isSubmitting} icon={iconButton} spinIcon={true} type="submit" variant="contained">
          {isSubmitting ? 'Sending' : 'Send'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
