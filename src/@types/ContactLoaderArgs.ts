import { LoaderFunctionArgs } from "react-router-dom";

export interface IContactLoaderArgs extends LoaderFunctionArgs {
  params: {
    contactId?: string;
  };
  request: Request;
}
