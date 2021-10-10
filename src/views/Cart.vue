<template>
  <div class="container mt-5 p-3 rounded cart">
    <div class="row no-gutters">
      <div class="col-12">
        <div class="mr-2">
          <div class="d-flex flex-row align-items-center">
            <router-link to="/order" style="color: var(--black);">
              <i class="bi bi-arrow-left"></i>
              <span class="ml-2">Continue Shopping</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div v-if="cart.length > 0" class="row no-gutters">
        <div class="col-md-8">
          <div class="cart-info mr-0 mr-md-2 mb-5 mb-md-0 table-shadow">
            <h6 class="mb-0">Shopping cart</h6>
            <CartItem
              v-for="product of cart"
              v-bind:key="`product-${product.id}`"
              v-bind:product="product"
              v-on:removeFromCart="removeFromCart"
            />
          </div>
        </div>
        <div class="col-md-4">
            <div class="payment-info table-shadow">
                <h6 class="mb-0 payment-header">Payment Information</h6>
                <div>
                  <label for="inputName" class="payment-label">Name on card</label>
                  <input id="inputName" type="text" class="form-control credit-inputs" placeholder="Name" disabled>
                </div>
                <div>
                  <label for="inputPhoneNumber" class="payment-label">Phone Number</label>
                  <input id="inputPhoneNumber" type="text" class="form-control credit-inputs" placeholder="123-456-4790" disabled>
                </div>
                <div>
                  <label for="inputAddress" class="payment-label">Address</label>
                  <input id="inputAddress" type="text" class="form-control credit-inputs" placeholder="Address" disabled>
                </div>
                <div>
                  <label for="inputCredit" class="payment-label">Card number</label>
                  <input id="inputCredit" type="text" class="form-control credit-inputs" placeholder="0000 0000 0000 0000" disabled>
                </div>
                <div class="row">
                    <div class="col-md-6">
                      <label for="inputDate" class="payment-label">Date</label>
                      <input id="inputDate" type="text" class="form-control credit-inputs" placeholder="1/01" disabled>
                    </div>
                    <div class="col-md-6">
                      <label for="inputCVV" class="payment-label">CVV</label>
                      <input id="inputCVV" type="text" class="form-control credit-inputs" placeholder="123" disabled>
                    </div>
                </div>
                <hr class="line">
                <div class="d-flex justify-content-between information">
                  <span>Subtotal</span>
                  <span>${{ (subtotal).toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between information">
                  <span>Shipping</span>
                  <span>${{ (shipping).toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between information">
                  <span>Taxes</span>
                  <span>${{ (tax).toFixed(2) }}</span>
                </div>
                <div class="d-flex justify-content-between information">
                  <span>Total</span>
                  <span>${{ (subtotal + shipping + tax).toFixed(2) }}</span>
                </div>
                <button class="btn btn-primary btn-block d-flex justify-content-center mt-3" type="button">
                  <span>Checkout<i class="bi bi-arrow-right ml-1"></i></span>
                </button>
            </div>
        </div>
    </div>
    <div v-else class="row no-gutters table-shadow">
      <div class="py-5 w-100 align-self-center">
        <h3>Looks like your cart is empty!</h3>
        <img :src="EmptyCart" 
          alt="Empty cart | Photo by SHVETS production from Pexels" 
          class="img-fluid ronded table-shadow empty-cart mt-2"/>
        <hr>
        <p>Let's make sure our chefs know what you'd like to eat</p>
        <router-link tag="button" to="/order" class="btn btn-primary">
          Start an Order
        </router-link>
      </div>
    </div>
</div>
</template>

<script>
  import CartItem from '../components/CartItem'; 
  import cart from '../api/cart';
  import products from '../api/products';
  import EmptyCart from '../assets/empty_cart.jpg';
  export default {
    name: 'Cart',
    components: { CartItem },
    data() {
      return {
        subtotal: 0.00,
        shipping: 0.00,
        tax: 0.00,
        cart: [],
        EmptyCart,
      }
    },
    created() {
      this.updateCart();
    },
    methods: {
      removeFromCart({ id }) {
        cart.removeFromCart(id);
        this.updateCart();
      },
      updateCart() {
        const newCart = Object.entries(cart.getCart()).map(([id, quantity]) => {
          const product = products.getProductById(parseInt(id));
          return {
            id: parseInt(id),
            title: product.title,
            src: product.src,
            price: product.price,
            quantity,
          }
        });
        this.cart = newCart;
        this.subtotal = newCart.reduce((prev, curr) => {
          prev += (curr.price * curr.quantity);
          return prev;
        }, 0);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .payment-info {
    padding: 10px;
    border-radius: 6px;
  }

  .payment-header {
    margin-bottom: 10px !important;
  }

  .payment-label {
    margin-top: 10px;
  }

  .cart-info {
    padding: 10px;
  }

  .cart {
    background: #fff;
  }

  .table-shadow {
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
  }

  .items {
      -webkit-box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.25);
      box-shadow: 5px 5px 4px -1px rgba(0, 0, 0, 0.08)
  }

  .empty-cart {
    max-width: 80%;
    max-height: 350px;
  }
</style>