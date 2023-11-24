import { IContactLoaderArgs } from "@/@types/ContactLoaderArgs";
import { getContact, updateContact } from "@/helpers/contact/contact";

export const contactLoader = async ({ params }: IContactLoaderArgs) => {
  if (!params.contactId) return;
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
};

export const favoriteAction = async ({
  params,
  request,
}: IContactLoaderArgs) => {
  const formData = await request.formData();
  if (params.contactId === undefined) return;
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
};
