<template>
  <div class="d-flex justify-content-between align-items-center my-1 p-2 items rounded">
      <div class="d-flex flex-row">
        <img class="rounded" v-bind:src="`${product.src}`" width="75">
        <div class="ml-2 align-self-center">
          <div class="font-weight-bold d-block">{{ product.title }}</div>
        </div>
      </div>
      <div class="d-flex flex-row align-items-center">
        <span class="d-block">{{ product.quantity }}</span>
        <span class="d-block ml-5 font-weight-bold" style="min-width: 5ch">${{ (product.price).toFixed(2) }}</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'TrackingOrderItem',
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
  }
</script>