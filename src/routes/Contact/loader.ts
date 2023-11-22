import { getContact } from "@/helpers/contact/contact";
import type { LoaderFunctionArgs } from "react-router-dom";

interface IContactLoaderArgs extends LoaderFunctionArgs {
  params: {
    contactId: string;
  };
}

export const contactLoader = async ({ params }: IContactLoaderArgs) => {
  const contact = await getContact(params.contactId);
  return { contact };
};
