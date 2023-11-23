import { IContactLoaderArgs } from "@/@types/ContactLoaderArgs";
import { getContact } from "@/helpers/contact/contact";

export const contactLoader = async ({ params }: IContactLoaderArgs) => {
  if (!params.contactId) return;
  const contact = await getContact(params.contactId);
  return { contact };
};
