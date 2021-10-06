<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
:root {
  --primary: #C40815;
  --bs-primary: var(--primary) !important;
  --primaryHover: #C92F3A;
  --black: #222222;
  --white: #FFFFFF;
  --muted: #5E5E5E;
  --neutral-0: #f7f5f0;
  --neutral-1: #FBF7EE;
  --neutral-2: #EED7C8;
  --neutral-3: #DFD5CF;
  --linkHover: #EFEFF2;
}
#app {
  font-family: 'Libre Baskerville', serif;
  background-color: var(--neutral-1);
  position: relative;
  min-height: 100vh;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
