<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <router-link
          to="/" tag="img" :src="Logo" 
          class="header-logo mb-3 mb-lg-1 mt-1 col-12 col-lg-3 align-self-center"
          alt="Company Logo"
          title="Home"
        />
        <div class="header-navbar container mb-1 mt-1 col-12 col-lg-6 align-self-center">
          <div class="row">
            <!-- Render each of the routes -->
            <div class="col" v-for="{name, route} in routes" v-bind:key="route">
              <router-link class="btn hover" :to="route">{{ name }}</router-link>
            </div>
          </div>
        </div>
        <div class="col-3 mb-1 mt-1 align-self-center d-none d-lg-flex d-xl-flex">
          <div class="header-slogan">The fastest, freshest Pizza in town, straight to your door</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '@/assets/Logo.svg';
  export default {
    name: 'Header',
    data() {
      return {
        routes: [
          { name: 'Order', route: '/order' },
          { name: 'Cart', route: '/cart' },
          { name: 'Tracking', route: '/tracking' },
          { name: 'Business', route: '/contact' },
        ],
        Logo
      };
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: var(--white);
    box-shadow: 0 0 0 1px rgb(67 41 163 / 10%), 0 1px 8px 0 rgb(67 41 163 / 10%);
  }

  .header-logo {
    max-height: 55px;
    &:hover {
      cursor: pointer;
    }
  }

  .header-navbar {
    text-align: center;
    font-size: 14px !important;
    & > .row {
      --bs-gutter-x: 0 !important;
      flex-wrap: unset !important;
    }
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