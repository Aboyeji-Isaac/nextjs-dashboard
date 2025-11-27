export const customers = [
  {
    id: '1',
    name: 'Customer One',
    email: 'customer1@example.com',
    image_url: 'https://placehold.co/64x64',
  },
  {
    id: '2',
    name: 'Customer Two',
    email: 'customer2@example.com',
    image_url: 'https://placehold.co/64x64',
  },
  {
    id: '3',
    name: 'Customer Three',
    email: 'customer3@example.com',
    image_url: 'https://placehold.co/64x64',
  },
];


export const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 29933,
    status: 'pending',
    date: '2022-11-14', // Fixed invalid date (was 202-11-14)
  },
];

export const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2100 },
  { month: 'Jun', revenue: 2400 },
];

// Must match your seed / users table structure
export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
  },
];
