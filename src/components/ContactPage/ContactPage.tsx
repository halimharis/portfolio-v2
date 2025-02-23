import { CONTACT_CONTENT, QUESTIONS } from "../../constants";
import ContactDetails from "./ContactDetails";
import FormItem from "./FormItem";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-dvh flex flex-col px-60 py-40 max-lg:px-6 max-xl:px-24">
      <h1 className="font-oswald text-6xl">SAY HELLO!</h1>
      <span className="text-neutral-400 font-onest">
        don't need to be formal, text me anything!
      </span>
      <div className="flex mt-24 w-full gap-32 max-lg:flex-col-reverse">
        <div className="flex flex-col grow">
          {QUESTIONS.map((question, index) => (
            <FormItem
              key={index}
              label={question.label}
              placeholder={question.placeholder}
              number={`0${index + 1}`}
              textarea={index === QUESTIONS.length - 1}
            />
          ))}
        </div>
        <div className="flex flex-col gap-16">
          {CONTACT_CONTENT.map((section, index) => (
            <ContactDetails key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
