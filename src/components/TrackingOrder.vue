<template>
  <div class="tracking-order">
    <TrackingOrderItem
      v-for="(product, index) of products"
      v-bind:key="`order-${date}-product-${index}`"
      v-bind:product="product"
      v-bind:showRemoveCart="false"
    ></TrackingOrderItem>
  </div>
</template>
<script>
  import TrackingOrderItem from './TrackingOrderItem.vue';
  export default {
    name: 'TrackingOrder',
    components: { TrackingOrderItem },
    props: {
      products: {
        type: Array,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
    }
  }
</script>