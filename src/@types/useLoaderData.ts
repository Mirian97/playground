import { LoaderFunction } from "react-router-dom";

type TLoaderData<TLoaderFn extends LoaderFunction> = Awaited<
  ReturnType<TLoaderFn>
> extends Response | infer D
  ? D
  : never;

export default TLoaderData;
