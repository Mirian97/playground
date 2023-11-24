import ErrorPage from "@/pages/Error/Error";
import Contact from "@/routes/Contact/Contact";
import { contactLoader, favoriteAction } from "@/routes/Contact/loader";
import { deleteContactAction } from "@/routes/DeleteContact/loader";
import EditContact from "@/routes/EditContact/EditContact";
import { editContactAction } from "@/routes/EditContact/loader";
import Index from "@/routes/Root/Index/Index";
import Root from "@/routes/Root/Root";
import { rootAction, rootLoader } from "@/routes/Root/loader";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        path: "contacts/",
        children: [
          { index: true, element: <Index /> },
          {
            path: ":contactId",
            element: <Contact />,
            loader: contactLoader,
            action: favoriteAction,
          },
          {
            path: ":contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editContactAction,
          },
          {
            path: ":contactId/destroy",
            errorElement: <p>Oops! There was an error!</p>,
            loader: contactLoader,
            action: deleteContactAction,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
