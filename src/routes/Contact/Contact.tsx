import TLoaderData from "@/@types/useLoaderData";
import { TContactItem } from "@/helpers/contact/ContactTypes";
import { Form, useFetcher, useLoaderData } from "react-router-dom";
import { contactLoader } from "./loader";

const Contact = () => {
  const loaderData = useLoaderData() as TLoaderData<typeof contactLoader>;
  if (loaderData?.contact === undefined) return null;
  const { avatar, last, first, twitter, notes } = loaderData.contact;

  return (
    <div id="contact">
      <div>{avatar !== undefined && <img key={avatar} src={avatar} />}</div>

      <div>
        <h1>
          {first || last ? (
            <>
              {first} {last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={loaderData.contact} />
        </h1>

        {twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${twitter}`}>
              {twitter}
            </a>
          </p>
        )}

        {notes && <p>{notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

const Favorite = ({ contact }: { contact: TContactItem }) => {
  let favorite = contact.favorite;
  const fetcher = useFetcher();

  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};

export default Contact;
