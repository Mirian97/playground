import TLoaderData from "@/@types/useLoaderData";
import { useEffect } from "react";
import {
  Form,
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { rootLoader } from "./loader";

const Root = () => {
  const { contacts, q } = useLoaderData() as TLoaderData<typeof rootLoader>;
  const { state } = useNavigation();
  //state could be 'idle' | 'loading' | 'submitting'
  const submit = useSubmit();

  useEffect(() => {
    const inputElement = document.getElementById("q") as HTMLInputElement;
    inputElement.value = q || "";
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q || ""}
              onChange={(event) => submit(event.currentTarget.form)}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail" className={state === "loading" ? "loading" : ""}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
