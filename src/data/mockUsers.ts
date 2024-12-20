import { User } from '../types/user';

// Generate dates for the last 6 months
const getRandomDate = (months: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  return date.toISOString();
};

export const mockUsers: User[] = [
  {
    id: 'usr_1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    createdAt: getRandomDate(6),
    lastLogin: getRandomDate(0),
    status: 'active'
  },
  {
    id: 'usr_2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'editor',
    createdAt: getRandomDate(5),
    lastLogin: getRandomDate(0),
    status: 'active'
  },
  {
    id: 'usr_3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'accountant',
    createdAt: getRandomDate(4),
    lastLogin: getRandomDate(1),
    status: 'active'
  },
  {
    id: 'usr_4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    role: 'user',
    createdAt: getRandomDate(4),
    lastLogin: getRandomDate(2),
    status: 'inactive'
  },
  {
    id: 'usr_5',
    name: 'David Brown',
    email: 'david@example.com',
    role: 'editor',
    createdAt: getRandomDate(3),
    lastLogin: getRandomDate(0),
    status: 'active'
  },
  {
    id: 'usr_6',
    name: 'Emily Davis',
    email: 'emily@example.com',
    role: 'user',
    createdAt: getRandomDate(3),
    lastLogin: getRandomDate(1),
    status: 'active'
  },
  {
    id: 'usr_7',
    name: 'Alex Turner',
    email: 'alex@example.com',
    role: 'accountant',
    createdAt: getRandomDate(2),
    lastLogin: getRandomDate(0),
    status: 'active'
  },
  {
    id: 'usr_8',
    name: 'Lisa Anderson',
    email: 'lisa@example.com',
    role: 'user',
    createdAt: getRandomDate(2),
    lastLogin: getRandomDate(1),
    status: 'active'
  },
  {
    id: 'usr_9',
    name: 'Tom Wilson',
    email: 'tom@example.com',
    role: 'user',
    createdAt: getRandomDate(1),
    lastLogin: getRandomDate(2),
    status: 'inactive'
  },
  {
    id: 'usr_10',
    name: 'Rachel Green',
    email: 'rachel@example.com',
    role: 'editor',
    createdAt: getRandomDate(0),
    lastLogin: getRandomDate(0),
    status: 'active'
  },
  // Add more users with different creation dates to show growth
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `usr_${i + 11}`,
    name: `Test User ${i + 1}`,
    email: `test${i + 1}@example.com`,
    role: 'user' as const,
    createdAt: getRandomDate(Math.floor(Math.random() * 6)),
    lastLogin: getRandomDate(Math.floor(Math.random() * 3)),
    status: Math.random() > 0.2 ? 'active' as const : 'inactive' as const
  }))
];