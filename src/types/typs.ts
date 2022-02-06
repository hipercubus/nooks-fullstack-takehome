export type User = {
  id: string;
  name: string;
};
export type GlobalContextType = {
  currentUser: User | null;
  usersList: User[];
};
export type GlobalContextProviderType = {
  children: React.ReactNode;
};
