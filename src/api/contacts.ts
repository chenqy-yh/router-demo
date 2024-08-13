import localforage from "localforage";

export const getContacts = async (query?: string) => {
  await fakenet(`contacts:${query}`);
  const contacts = (await localforage.getItem("contacts")) as ContactItem[];
  if (!contacts) return [];
  if (query) {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  return contacts;
};

export const getContact = async (id: number) => {
  await fakenet(`contact:${id}`);
  const contacts = (await localforage.getItem("contacts")) as ContactItem[];
  return contacts?.find((contact) => contact.id === id);
};

export const createContact = async () => {
  await fakenet();
  const id = randomNum(8);
  const newContact = {
    id,
    name: "New Contact",
    path: `/contacts/${id}`,
    createAt: new Date().toISOString(),
  };
  const contacts = (await localforage.getItem("contacts")) as ContactItem[];
  localforage.setItem("contacts", [...(contacts || []), newContact]);
  return newContact;
};

export const updateContact = async (id: number, updates: ContactItem) => {
  await fakenet();
  const contacts = (await localforage.getItem("contacts")) as ContactItem[];
  const _id = contacts.findIndex((contact) => contact.id === id);
  if (_id === -1) throw new Error(`Contact not found id:${id}!`);
  contacts[_id] = { ...contacts[_id], ...updates };
  localforage.setItem("contacts", contacts);
  return contacts[_id];
};

const fakenet = (() => {
  const cache: Record<string, number> = {};

  const getRandomDelay = () => {
    return Math.floor(Math.random() * 800);
  };

  const keyInCache = (key?: string) => {
    return key && key in cache;
  };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (key?: string) => {
    if (keyInCache(key)) return;
    const delay = getRandomDelay();
    if (!key) return sleep(delay);
    cache[key] = delay;
    return sleep(delay);
  };
})();

const randomNum = (len: number) => {
  let r = 0;
  for (let i = 0; i < len; i++) {
    r = r * 10 + ~~(Math.random() * 10);
  }
  return r;
};
