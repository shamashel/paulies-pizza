/** @typedef {{ date: Date, cart: import("./cart").Cart, total: number }} Order */
/** @typedef {Order[]} Orders */

/** @retrns {Orders} */
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