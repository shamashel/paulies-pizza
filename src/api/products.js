const products = [
  {
    title: `Pepperoni Pizza`,
    stars: 5,
    price: 14.99,
    src: `${process.env.BASE_URL}images/pepperoni_pizza.jpg`,
  },
  {
    title: `3 Topping Pizza`,
    stars: 5,
    price: 19.99,
    src: `${process.env.BASE_URL}images/3_topping_pizza.jpg`,
  },
  {
    title: `Mozzarella Sticks`,
    stars: 5,
    price: 4.99,
    src: `${process.env.BASE_URL}images/mozzarella_sticks.jpg`,
  },
  {
    title: `Garlic Knots`,
    stars: 5,
    price: 1.99,
    src: `${process.env.BASE_URL}images/garlic_knots.jpg`,
  },
  {
    title: `Garlic Bread`,
    stars: 5,
    price: 2.99,
    src: `${process.env.BASE_URL}images/garlic_bread.jpg`,
  },
  {
    title: `Pasta Entree`,
    stars: 5,
    price: 21.99,
    src: `${process.env.BASE_URL}images/pasta_entree.jpg`,
  },
];

export function getAllProducts() {
  // Deep clone the products array for safety
  return products.map(product => { return { ...product }; });
}

export function getProductById(id) {
  if (typeof id === `string`) {
    id = parseInt(id);
  }
  // Clone the product instead of directly returning it for safety
  return { ...products[id] };
}

export default {
  getAllProducts,
  getProductById,
}