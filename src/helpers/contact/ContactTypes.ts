export type TContactItem = {
  id: string;
  createdAt: number;
  first?: string;
  last?: string;
  twitter?: string;
  avatar?: string;
  notes?: string;
  favorite?: boolean;
};

export type TContactList = Array<TContactItem> | null;

export type TOmitIdCreatedAtFromContactItem = Omit<
  TContactItem,
  "id" | "createdAt"
>;
