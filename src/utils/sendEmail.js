import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_49m26q2";
const TEMPLATE_ID = "template_6jidlns";
const PUBLIC_KEY = "0GdsVuzVOSeK_10VN";

export const sendEmailForm = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    return { success: true, result };
  } catch (error) {
    console.log("EmailJS Error:", error);
    return { success: false, error };
  }
};