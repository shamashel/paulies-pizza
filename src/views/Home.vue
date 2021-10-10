<template>
  <div class="home">
    <div class="container px-4 px-lg-5 mt-5">
      <div class="jumbotron">
        <h1>Welcome to Paulie's Pizza!</h1>
        <!-- Main Descriptive content here -->
        <!-- Should consist of a general explanation of the business with a call to action to place an order -->
        <div class="landing-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos saepe consectetur eos, harum molestias officia eaque explicabo, vero sapiente culpa. Ipsum accusantium in error libero dolores ex quia cupiditate!
        </div>
        <hr>
        <p>For business inquiries, contact us <router-link class="link-primary" to="/contact">here</router-link></p>
        <router-link class="btn btn-primary" to="/order">Start an Order</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
