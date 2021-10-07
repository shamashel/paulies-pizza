<template>
  <div class="product">
    <div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" v-bind:src="product.src" alt="placeholder image" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5>{{ product.title }}</h5>
                    <!-- Product reviews-->
                    <div class="d-flex justify-content-center small text-warning mb-2">
                        <template v-if="product.stars > 0">
                          <div v-for="index in product.stars" v-bind:key="`stars-filled-${index}`" class="bi-star-fill"></div>
                        </template>
                        <template v-if="product.stars < 5">
                          <div v-for="index in (5 - product.stars)" v-bind:key="`stars-empty-${index}`" class="bi-star"></div>
                        </template>
                    </div>
                    <!-- Insert Product Price Here-->
                    <span>${{ product.price }}</span>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <!-- Should trigger a JS call to add the particular item to the user's cart -->
                  <button class="btn btn-outline-dark mt-auto" v-on:click="addToCart(id)">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { getProductById } from '../api/products';
  export default {
    name: 'Product',
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    methods: {
      addToCart(id) {
        this.$emit('addToCart', id);
      }
    },
    computed: {
      /** @returns { ReturnType<getProductById> } */
      product() {
        return getProductById(this.id);
      },
    },
  }
</script>