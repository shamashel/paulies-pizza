<template>
  <div class="container">
    <div class="tracking-order m-3">
      <h3>{{ date }}</h3>
      <hr>
      <TrackingOrderItem
        v-for="(product, index) of products"
        v-bind:key="`order-${date}-product-${index}`"
        v-bind:product="product"
      ></TrackingOrderItem>
      <hr>
      <div class="total container text-right">
        Total: ${{ total.toFixed(2) }}
      </div>
    </div>
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

<style lang="scss" scoped>
  .tracking-order {
    background: #fff;
    -webkit-box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    box-shadow: 5px 5px 15px -2px rgba(0, 0, 0, 0.42);
    padding: 10px;
    max-width: 1000px;
  }
  .total {
    padding: 8px;
    font-weight: bold;
  }
</style>