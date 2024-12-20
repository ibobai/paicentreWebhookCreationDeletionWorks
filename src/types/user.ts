export type UserRole = 'admin' | 'editor' | 'accountant' | 'user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  lastLogin?: string;
  status: 'active' | 'inactive';
}