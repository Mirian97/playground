import { IContactLoaderArgs } from "@/@types/ContactLoaderArgs";
import { deleteContact } from "@/helpers/contact/contact";
import { redirect } from "react-router-dom";

export const deleteContactAction = async ({ params }: IContactLoaderArgs) => {
  const { contactId } = params;
  if (contactId === undefined) return;
  await deleteContact(contactId);
  return redirect("/");
};
