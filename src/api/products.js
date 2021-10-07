const products = [
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
  {
    title: 'Product Name',
    stars: 5,
    price: 19.99,
    src: 'https://via.placeholder.com/450x300',
  },
];

export function getProductById(id) {
  return products[id];
}