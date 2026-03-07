import emailjs from '@emailjs/browser';

export const sendEmailForm = async (formRef) => {
  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return { success: true };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false };
  }
};