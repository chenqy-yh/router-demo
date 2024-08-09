import { getContacts } from "../api/contacts";

export const loader = async () => {
  const contacts = await getContacts();
  return { contacts };
};
