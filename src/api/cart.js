/** @typedef {{[id: number]: [quantity: number]}} Cart */

/** @returns {Cart} */
export function getCart() {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    // If the cart is null, return an empty object 
    return {};
  }
}

/**
 * @private
 * @param {Cart} cart
 * @returns {Cart} The updated cart object
 */
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  return getCart();
}

/**
 * @param {number} id - The ID of the item to add to the cart 
 * @param {number} [quantity] - The amount of that item to add to the cart
 * @returns {Cart} The updated cart object
 */
export function addToCart(id, quantity = 1) {
  const cart = getCart();
  const found = cart[id];
  if (Number.isInteger(found)) {
    cart[id] = found + quantity;
  } else {
    cart[id] = quantity;
  }
  return setCart(cart);
}

/**
 * @param {number} id - The ID of the item to add to the cart
 * @returns {Cart} The updated cart object
 */
export function removeFromCart(id) {
  let cart = getCart();
  const found = cart[id];
  if (Number.isInteger(found)) {
    // Delete the id from the cart
    delete cart[id];
    return setCart(cart);
  } else {
    // id not found in cart, so don't perform the action & just return the existing cart
    return cart;
  }
}

export function emptyCart() {
  return setCart({});
}

export default {
  getCart,
  addToCart,
  removeFromCart,
  emptyCart,
}