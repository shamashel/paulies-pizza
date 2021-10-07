<template>
  <div class="order">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Product
              v-for="productId of productList"
              v-bind:key="`product-${productId}`"
              v-bind:id="productId"
            />
        </div>
    </div>
  </div>
</template>
<script>
  import Product from '../components/Product.vue';
  export default {
    name: 'Order',
    components: {
      Product,
    },
    data() {
      return {
        productList: [0,0,0,0,0,0],
      }
    },
  }
</script>