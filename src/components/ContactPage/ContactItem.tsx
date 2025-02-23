// FooterItem.tsx

import type { ContactItemType } from "../../constants";

interface IContactItem {
  item: ContactItemType;
}

function ContactItem({ item }: IContactItem) {
  return (
    <a href={item.url} className="text-xl underline-animation w-fit">
      {item.label}
    </a>
  );
}

export default ContactItem;
