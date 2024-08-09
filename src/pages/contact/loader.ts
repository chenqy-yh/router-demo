import { getContact } from "../../api/contacts";
import { LoaderFunctionArgs } from "react-router-dom";

const paramsToNum = (arg: string | undefined, errorCode = -1) => {
  const n = arg ? parseInt(arg) : errorCode;
  return isNaN(n) ? errorCode : n;
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return {
    contact: await getContact(paramsToNum(params.contactId)),
  };
};
