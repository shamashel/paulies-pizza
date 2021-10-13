<template>
  <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <div class="d-flex flex-row">
        <img class="rounded" v-bind:src="`${product.src}`" width="75">
        <div class="ml-2 align-self-center">
          <div class="font-weight-bold d-block">{{ product.title }}</div>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center">
        <span class="d-block">{{ product.quantity }}</span>
        <span class="d-block ml-5 font-weight-bold">${{ (product.price).toFixed(2) }}</span>
        <i
          class="bi-trash-fill ml-3 text-black-50 clicky"
          v-on:click="removeFromCart(product.id)"
        ></i>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    },
    methods: {
      removeFromCart(id) {
        this.$emit('removeFromCart', { id });
      }
    }
  }
</script>