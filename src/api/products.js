const products = [
  {
    title: 'Large Pizza',
    stars: 5,
    price: 14.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Large Pizza (3 Toppings)',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Mozzarella Sticks',
    stars: 5,
    price: 4.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Garlic Knots',
    stars: 5,
    price: 1.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Garlic Bread',
    stars: 5,
    price: 2.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Pasta Entree',
    stars: 5,
    price: 21.99,
    src: 'https://via.placeholder.com/450x300',
  },
];

export function getAllProducts() {
  // Deep clone the products array for safety
  return products.map(product => { return { ...product }; });
}

export function getProductById(id) {
  if (typeof id === 'string') {
    id = parseInt(id);
  }
  // Clone the product instead of directly returning it for safety
  return { ...products[id] };
}

export default {
  getAllProducts,
  getProductById,
}