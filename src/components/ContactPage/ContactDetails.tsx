// FooterSection.tsx

import { ContactSectionType } from "../../constants";
import ContactItem from "./ContactItem";

interface IContactDetails {
  section: ContactSectionType;
}

function ContactDetails({ section }: IContactDetails) {
  return (
    <div className="flex flex-col gap-4 max-lg:gap-3">
      <span className="uppercase text-sm font-onest text-neutral-400 max-lg:text-xs">
        {section.title}
      </span>
      {section.items.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
}

export default ContactDetails;
