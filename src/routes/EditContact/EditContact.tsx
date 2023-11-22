import TLoaderData from "@/@types/useLoaderData";
import { Form, useLoaderData } from "react-router-dom";
import { contactLoader } from "../Contact/loader";

const EditContact = () => {
  const data = useLoaderData() as TLoaderData<typeof contactLoader>;
  if (data?.contact === undefined) return null;
  const { avatar, last, first, twitter, notes } = data.contact;

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={first || ""}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={last || ""}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={twitter || ""}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={avatar || ""}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={notes || ""} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
};

export default EditContact;
