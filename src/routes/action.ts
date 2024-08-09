import { createContact } from "../api/contacts";

export const action = async () => {
  const contact = createContact();
  return { contact };
};
