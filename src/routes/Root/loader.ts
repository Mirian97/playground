import { createContact, getContacts } from "@/helpers/contact/contact";
import { redirect } from "react-router-dom";

export const rootLoader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const rootAction = async () => {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
};
