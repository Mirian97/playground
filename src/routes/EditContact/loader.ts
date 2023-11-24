import { IContactLoaderArgs } from "@/@types/ContactLoaderArgs";
import { updateContact } from "@/helpers/contact/contact";
import { redirect } from "react-router-dom";

export const editContactAction = async ({
  request,
  params,
}: IContactLoaderArgs) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  if (!params.contactId) return;
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
};
