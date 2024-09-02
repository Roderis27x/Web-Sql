// Mock data for demonstration purposes
const mockData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 28 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', age: 35 },
    { id: 4, name: 'Bob Williams', email: 'bob@example.com', age: 42 },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', age: 25 },
    { id: 6, name: 'Diana Clark', email: 'diana@example.com', age: 31 },
    { id: 7, name: 'Edward Davis', email: 'edward@example.com', age: 39 },
    { id: 8, name: 'Fiona Miller', email: 'fiona@example.com', age: 27 },
    { id: 9, name: 'George Wilson', email: 'george@example.com', age: 33 },
    { id: 10, name: 'Hannah Moore', email: 'hannah@example.com', age: 29 },
    { id: 11, name: 'Ian Taylor', email: 'ian@example.com', age: 36 },
    { id: 12, name: 'Julia White', email: 'julia@example.com', age: 40 },
    { id: 13, name: 'Kevin Lee', email: 'kevin@example.com', age: 34 },
    { id: 14, name: 'Laura Hall', email: 'laura@example.com', age: 32 },
    { id: 15, name: 'Michael Scott', email: 'michael@example.com', age: 45 },
    { id: 16, name: 'Nancy Adams', email: 'nancy@example.com', age: 38 },
    { id: 17, name: 'Oscar Garcia', email: 'oscar@example.com', age: 37 },
    { id: 18, name: 'Patricia Lopez', email: 'patricia@example.com', age: 41 },
    { id: 19, name: 'Quentin Foster', email: 'quentin@example.com', age: 26 },
    { id: 20, name: 'Rachel Green', email: 'rachel@example.com', age: 30 }
  ],
  products: [
    { id: 1, name: 'Laptop Pro', price: 1299.99, status: 'active', category: 'Electronics' },
    { id: 2, name: 'Smartphone X', price: 799.99, status: 'active', category: 'Electronics' },
    { id: 3, name: 'Wireless Earbuds', price: 129.99, status: 'active', category: 'Electronics' },
    { id: 4, name: 'Coffee Maker', price: 79.99, status: 'active', category: 'Home Appliances' },
    { id: 5, name: 'Running Shoes', price: 89.99, status: 'active', category: 'Sports' },
    { id: 6, name: 'Yoga Mat', price: 29.99, status: 'active', category: 'Sports' },
    { id: 7, name: 'Desk Chair', price: 199.99, status: 'active', category: 'Furniture' },
    { id: 8, name: 'Blender', price: 49.99, status: 'active', category: 'Home Appliances' },
    { id: 9, name: 'Backpack', price: 59.99, status: 'active', category: 'Accessories' },
    { id: 10, name: 'Smartwatch', price: 249.99, status: 'active', category: 'Electronics' },
    { id: 11, name: 'Portable Charger', price: 39.99, status: 'active', category: 'Electronics' },
    { id: 12, name: 'Wireless Mouse', price: 24.99, status: 'active', category: 'Electronics' },
    { id: 13, name: 'Fitness Tracker', price: 99.99, status: 'active', category: 'Electronics' },
    { id: 14, name: 'Water Bottle', price: 14.99, status: 'active', category: 'Sports' },
    { id: 15, name: 'Bluetooth Speaker', price: 69.99, status: 'active', category: 'Electronics' },
    { id: 16, name: 'Desk Lamp', price: 34.99, status: 'active', category: 'Home Appliances' },
    { id: 17, name: 'Sunglasses', price: 79.99, status: 'active', category: 'Accessories' },
    { id: 18, name: 'Hiking Boots', price: 129.99, status: 'active', category: 'Sports' },
    { id: 19, name: 'External Hard Drive', price: 89.99, status: 'active', category: 'Electronics' },
    { id: 20, name: 'Wireless Keyboard', price: 49.99, status: 'active', category: 'Electronics' }
  ],
  orders: [
    { id: 1, userId: 1, productId: 1, quantity: 1, created_at: '2023-03-15T10:30:00Z', total: 1299.99 },
    { id: 2, userId: 2, productId: 3, quantity: 2, created_at: '2023-03-16T14:45:00Z', total: 259.98 },
    { id: 3, userId: 3, productId: 5, quantity: 1, created_at: '2023-03-17T09:15:00Z', total: 89.99 },
    { id: 4, userId: 4, productId: 2, quantity: 1, created_at: '2023-03-18T16:20:00Z', total: 799.99 },
    { id: 5, userId: 5, productId: 7, quantity: 1, created_at: '2023-03-19T11:00:00Z', total: 199.99 },
    { id: 6, userId: 6, productId: 10, quantity: 1, created_at: '2023-03-20T13:30:00Z', total: 249.99 },
    { id: 7, userId: 7, productId: 4, quantity: 1, created_at: '2023-03-21T15:45:00Z', total: 79.99 },
    { id: 8, userId: 8, productId: 9, quantity: 2, created_at: '2023-03-22T10:10:00Z', total: 119.98 },
    { id: 9, userId: 9, productId: 6, quantity: 1, created_at: '2023-03-23T14:00:00Z', total: 29.99 },
    { id: 10, userId: 10, productId: 8, quantity: 1, created_at: '2023-03-24T17:20:00Z', total: 49.99 },
    { id: 11, userId: 11, productId: 12, quantity: 1, created_at: '2023-03-25T09:30:00Z', total: 24.99 },
    { id: 12, userId: 12, productId: 15, quantity: 1, created_at: '2023-03-26T12:15:00Z', total: 69.99 },
    { id: 13, userId: 13, productId: 11, quantity: 2, created_at: '2023-03-27T16:40:00Z', total: 79.98 },
    { id: 14, userId: 14, productId: 14, quantity: 3, created_at: '2023-03-28T11:25:00Z', total: 44.97 },
    { id: 15, userId: 15, productId: 13, quantity: 1, created_at: '2023-03-29T14:50:00Z', total: 99.99 },
    { id: 16, userId: 16, productId: 17, quantity: 1, created_at: '2023-03-30T10:05:00Z', total: 79.99 },
    { id: 17, userId: 17, productId: 18, quantity: 1, created_at: '2023-03-31T13:20:00Z', total: 129.99 },
    { id: 18, userId: 18, productId: 16, quantity: 2, created_at: '2023-04-01T15:35:00Z', total: 69.98 },
    { id: 19, userId: 19, productId: 19, quantity: 1, created_at: '2023-04-02T09:55:00Z', total: 89.99 },
    { id: 20, userId: 20, productId: 20, quantity: 1, created_at: '2023-04-03T12:40:00Z', total: 49.99 }
  ],
};

export const executeDatabaseQuery = async (query) => {
  // This is a very simple mock implementation
  // In a real application, you would send this query to a backend server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query.toLowerCase().includes('select * from users')) {
        resolve(mockData.users);
      } else if (query.toLowerCase().includes('select * from products where status = "active"')) {
        resolve(mockData.products.filter(p => p.status === 'active'));
      } else if (query.toLowerCase().includes('select * from orders order by created_at desc limit 10')) {
        resolve(mockData.orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 10));
      } else {
        reject(new Error('Query not recognized or not implemented in mock service'));
      }
    }, 500); // Simulate network delay
  });
};
