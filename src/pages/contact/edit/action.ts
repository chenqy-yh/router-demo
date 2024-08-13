import { ActionFunction } from "react-router-dom";
import { updateContact } from "@/api/contacts";

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData) as unknown as ContactItem;
  await updateContact(parseInt(params.contactId || ""), updates);
  return { redirect: `/contacts/${params.contactId}` };
};
