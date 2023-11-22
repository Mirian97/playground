export type ContactType = {
  id: string;
  first?: string;
  last?: string;
  twitter?: string;
  avatar?: string;
  notes?: string;
  createdAt: number;
};

export type ContactsType = Array<ContactType> | null;
