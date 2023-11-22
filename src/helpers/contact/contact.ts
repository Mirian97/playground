import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { TContactItem, TContactList } from "./ContactTypes";

export async function getContacts(query?: string) {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: TContactList = await localforage.getItem("contacts");
  if (contacts === null) {
    contacts = [];
  }
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

export async function createContact() {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact = { id, createdAt: Date.now() };
  const contacts = await getContacts();
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

export async function getContact(id: string) {
  await fakeNetwork(`contact:${id}`);
  let contacts: TContactList = [];
  contacts = await localforage.getItem("contacts");
  if (contacts === undefined || contacts === null) {
    contacts = [];
    await localforage.setItem("contacts", contacts);
  }
  const contact = contacts.find((contact) => contact.id === id);
  return contact;
}

export async function updateContact(id: string, updates: TContactItem) {
  await fakeNetwork();
  const contacts: TContactList = await localforage.getItem("contacts");
  if (contacts === null) return null;
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

export async function deleteContact(id: string) {
  const contacts: TContactList = await localforage.getItem("contacts");
  if (contacts === null) return null;
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: TContactList) {
  return localforage.setItem("contacts", contacts);
}

let fakeCache: Record<string, boolean> = {};

async function fakeNetwork(key?: string) {
  if (key === undefined) {
    fakeCache = {};
  }
  if (key !== undefined && fakeCache[key]) {
    return;
  }
  fakeCache[key as string] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
