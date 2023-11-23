import ErrorPage from "@/pages/Error/Error";
import Contact from "@/routes/Contact/Contact";
import Root from "@/routes/Root/Root";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { contactLoader } from "./routes/Contact/loader";
import { deleteContactAction } from "./routes/DeleteContact/laoder";
import EditContact from "./routes/EditContact/EditContact";
import { editContactAction } from "./routes/EditContact/loader";
import Index from "./routes/Root/Index/Index";
import { rootAction, rootLoader } from "./routes/Root/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        errorElement: <p>Oops! There was an error!</p>,
        loader: contactLoader,
        action: deleteContactAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
