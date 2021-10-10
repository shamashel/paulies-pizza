<template>
  <div class="order">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Product
              v-for="productId of productList"
              v-bind:key="`product-${productId}`"
              v-bind:id="productId"
              v-on:addToCart="addToCart"
            />
        </div>
    </div>
    <div v-if="cartQuantity > 0" class="view-cart-container container fixed-bottom text-center">
      <router-link to="/cart" tag="button" class="view-cart btn btn-primary w-100">
        View Cart ({{ cartQuantity }})
      </router-link>
    </div>
  </div>
</template>
<script>
  import Product from '../components/Product.vue';
  import products from '../api/products.js';
  import cart from '../api/cart.js';
  export default {
    name: 'Order',
    components: {
      Product,
    },
    data() {
      return {
        productList: [],
        cartQuantity: 0,
      }
    },
    async created() {
      this.productList = products.getAllProducts().map((val, index) => index);
      await this.updateCartQuantity();
    },
    methods: {
      async addToCart({ id }) {
        const newCart = cart.addToCart(id);
        this.cart = newCart;
        await this.updateCartQuantity();
      },
      async updateCartQuantity() {
        const items = cart.getCart();
        this.cartQuantity = Object.values(items).reduce((prev, curr) => prev += curr, 0);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .view-cart-container {
    bottom: 60px;
    height: 50px;
  }
  .view-cart {
    height: 50px;
  }
</style>