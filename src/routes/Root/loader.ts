import { IContactLoaderArgs } from "@/@types/ContactLoaderArgs";
import { createContact, getContacts } from "@/helpers/contact/contact";
import { redirect } from "react-router-dom";

export const rootLoader = async ({ request }: IContactLoaderArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q || "");
  return { contacts, q };
};

export const rootAction = async () => {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
};
