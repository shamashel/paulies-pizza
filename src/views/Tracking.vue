<template>
  <div class="tracking">
    <h1>My Orders</h1>
    <hr>
    <TrackingOrder
      v-for="order of orders"
      v-bind:key="`order-${order.date}`"
      v-bind:products="order.cart"
      v-bind:date="order.date"
      v-bind:total="order.total"
    />
  </div>
</template>

<script>
  import TrackingOrder from '../components/TrackingOrder';
  import orders from '../api/orders';
  import moment from 'moment';
  export default {
    name: 'Tracking',
    components: { TrackingOrder },
    data() {
      return {
        orders: [],
      };
    },
    created() {
      const orderList = orders.getOrders();
      // sort in descending order
      orderList.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.orders = orderList.map((order) => {
        const date = moment(order.date);
        order.date = `Placed on ${date.format('L')} at ${date.format('LT')}`;
        return order;
      });
    },
  }
</script>