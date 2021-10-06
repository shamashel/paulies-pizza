<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <img src="../assets/Logo.svg" class="header-logo mb-4 col-12 col-md-3 align-self-center" />
        <div class="header-navbar container mb-4 col-12 col-md-6 align-self-center">
          <div class="row">
            <!-- Render each of the routes -->
            <div class="col" v-for="{name, route} in routes" v-bind:key="route">
              <a class="btn hover" v-bind:href="route">{{ name }}</a>
            </div>
          </div>
        </div>
        <div class="col-3 mb-4 align-self-center d-none d-md-flex d-lg-flex d-xl-flex">
          <div class="header-slogan">The fastest, freshest Pizza in town, straight to your door</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        routes: [
          { name: 'Home', route: '/home' },
          { name: 'Order', route: '/order' },
          { name: 'Tracking', route: '/tracking' },
          { name: 'Business', route: '/about' },
        ],
      };
    },
  };
</script>

<style scoped>
  .header {
    width: 100vw;
    padding-top: 10px;
    background-color: var(--white);
    box-shadow: 0 0 0 1px rgb(67 41 163 / 10%), 0 1px 8px 0 rgb(67 41 163 / 10%);
  }
  .header-logo {
    max-height: 55px;
  }

  .header-navbar {
    text-align: center;
    font-size: 14px !important;
  }
  .header-slogan {  
    font-style: normal;
    font-weight: normal;
    max-width: 15ch;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: var(--muted);
  }
</style>