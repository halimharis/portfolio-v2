// ContactPage.tsx
import { CONTACT_CONTENT, QUESTIONS, translation_en } from "../../constants";
import ContactDetails from "./ContactDetails";
import FormItem from "./FormItem";
import { FormProvider, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  [key: string]: string;
}

const ContactPage = () => {
  const methods = useForm<ContactFormData>();

  const { handleSubmit } = methods;

  const onSubmit = (data: ContactFormData) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        alert("Email sent successfully");
      })
      .catch(() => {
        alert("Failed to send an email, Please contact me directly");
      });
  };

  return (
    <div className="bg-black text-white min-h-dvh flex flex-col px-60 py-40 max-lg:px-6 max-xl:px-24">
      <FormProvider {...methods}>
        <h1 className="font-oswald text-6xl">
          {translation_en.contactPage.title}
        </h1>
        <span className="text-neutral-400 font-onest">
          {translation_en.contactPage.subtitle}
        </span>
        <div className="flex mt-24 w-full gap-32 max-lg:flex-col-reverse">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col grow relative"
          >
            {QUESTIONS.map((question, index) => (
              <FormItem
                key={index}
                label={question.label}
                placeholder={question.placeholder}
                number={`0${index + 1}`}
                formId={question.formId}
                textarea={index === QUESTIONS.length - 1}
              />
            ))}
            <button
              className="absolute -bottom-5 bg-leftToRight hover:text-black max-lg:right-2 bg-black duration-300 transition-all right-12 cursor-pointer block rounded-full px-4 py-2 border border-white"
              type="submit"
            >
              Submit &#129125;
            </button>
          </form>
          <div className="flex flex-col gap-16">
            {CONTACT_CONTENT.map((section, index) => (
              <ContactDetails key={index} section={section} />
            ))}
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default ContactPage;
