import { getContact } from "@/helpers/contact/contact";
import type { LoaderFunctionArgs } from "react-router-dom";

interface IContactLoaderArgs extends LoaderFunctionArgs {
  params: {
    contactId?: string;
  };
}

export const contactLoader = async ({ params }: IContactLoaderArgs) => {
  if (!params.contactId) return;
  const contact = await getContact(params.contactId);
  return { contact };
};
