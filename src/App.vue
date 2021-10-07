<template>
  <div id="app">
    <Header id="nav"/>
    <section id="body">
      <router-view/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
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
</style>
