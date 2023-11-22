import { updateContact } from "@/helpers/contact/contact";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

interface IEditContactAction extends LoaderFunctionArgs {
  params: {
    contactId?: string;
  };
  request: Request; //type Request from fetch API
}
//TODO: insert validations before submit values

export const editContactAction = async ({
  request,
  params,
}: IEditContactAction) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  if (!params.contactId) return;
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
};
