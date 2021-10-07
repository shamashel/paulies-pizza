<template>
  <div id="app">
    <Header id="nav"/>
    <section id="body">
      <router-view/>
    </section>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
@import "~@/assets/global.scss";
#app {
  font-family: 'Libre Baskerville', serif;
  background-color: var(--neutral-0);
  position: relative;
  min-height: 100vh;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-bottom: 10px;
}
#body {
  padding-bottom: 6rem !important;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
