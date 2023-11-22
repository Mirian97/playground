import { createContact, getContacts } from "@/helpers/contact/contact";

export const rootLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const rootAction = async () => {
  const contacts = await createContact();
  return { contacts };
};
