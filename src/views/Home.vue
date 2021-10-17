<template>
  <div class="home container h-100 px-4 px-lg-5 mt-5">
    <div class="jumbotron align-self-center">
      <h1>Welcome to Paulie's Pizza!</h1>
      <hr>
      <!-- Main Descriptive content here -->
      <!-- Should consist of a general explanation of the business with a call to action to place an order -->
      <div class="landing-content">
        <p>
          Paulie’s Pizza seeks to take the world of classic Italian food into the modern day of convenience and speed!
        </p>
        <p>
          We work together with businesses that might not normally be able to handle online delivery, and provide them with the
          recipes and infrastructure to start selling locally.
        </p>
        <p>
          If you're a hungry customer, that means you can quickly start an order and get great food delivered to you
          entirely online while supporting local businesses!
        </p>
      </div>
      <router-link class="btn btn-primary" to="/order">Start an Order</router-link>
      <hr>
      <p>For business inquiries, contact us <router-link class="link-primary" to="/contact">here</router-link></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {}
  }
</script>
<style lang="scss" scoped>
  .landing-content {
    margin: 10px 0;
  }
  .jumbotron {
    background-color: var(--neutral-0);
  }
</style>