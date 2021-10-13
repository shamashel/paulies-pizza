/** @typedef {{ date: Date, cart: any[], total: number }} Order */
/** @typedef {Order[]} Orders */

/** @returns {Orders} */
export function getOrders() {
  const orders = localStorage.getItem('orders');
  if (orders) {
    return JSON.parse(orders);
  } else {
    // If the cart is null, return an empty array 
    return [];
  }
}

/**
 * @param {Order} order 
 */
export function addOrder(order) {
  const orders = getOrders();
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

export default {
  getOrders, addOrder,
}